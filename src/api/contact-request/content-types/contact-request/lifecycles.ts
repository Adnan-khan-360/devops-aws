import { Strapi } from '@strapi/strapi';

export default {
  // Lifecycle hook triggered after a ContactRequest entry is created
  async afterCreate(event) {
    const { result } = event; // The newly created entry
    const strapi = (global as any).strapi as Strapi;

    // Extract fields from the created entry
    const { services, name, address, email, phone, company, message } = result;

    // 1. Send an email notification to the manager
    try {
        console.log("[ContactRequestLifecycle] Email process started ....... ");
      await strapi.plugin('email').service('email').send({
        from: strapi.config.get('plugin.email.settings.defaultFrom'),
        to: process.env.MANAGER_EMAIL, // Use environment variable for the recipient email
        subject: 'New Contact Request',
        text: `Hello,\n\nYou have a new contact request from ${name} (${email}) with the message: "${message}".\n\nPhone: ${phone}\nCompany: ${company}\nAddress: ${address}`,
      });

      console.log("[ContactRequestLifecycle] Email sent successfully");

    } catch (emailError) {
      console.error("[ContactRequestLifecycle] Error sending email: ", emailError);
      // Note: Do not throw errors here to prevent failing the creation process.
    }
  },
};
