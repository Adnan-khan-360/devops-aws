import type { Schema, Attribute } from '@strapi/strapi';

export interface UiComponentsValueItem extends Schema.Component {
  collectionName: 'components_ui_components_value_items';
  info: {
    displayName: 'Value-Item';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface UiComponentsTeammateItem extends Schema.Component {
  collectionName: 'components_ui_components_teammate_items';
  info: {
    displayName: 'Teammate-Item';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    profession: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    imageUrl: Attribute.Media<'images'>;
    socials: Attribute.Component<'ui-components.social-link', true>;
  };
}

export interface UiComponentsStoryItem extends Schema.Component {
  collectionName: 'components_ui_components_story_items';
  info: {
    displayName: 'Story-Item';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface UiComponentsStoryImages extends Schema.Component {
  collectionName: 'components_ui_components_story_images';
  info: {
    displayName: 'storyImages';
  };
  attributes: {
    bgImage: Attribute.Media<'images'>;
    imageUrlOne: Attribute.Media<'images'> & Attribute.Required;
    imageUrlTwo: Attribute.Media<'images'>;
    imageUrlThree: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String;
    items: Attribute.Component<'ui-components.story-item', true>;
  };
}

export interface UiComponentsSocialLink extends Schema.Component {
  collectionName: 'components_ui_components_social_links';
  info: {
    displayName: 'SocialLink';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<
      ['facebook', 'twitter', 'instagram', 'linkedin']
    > &
      Attribute.Required;
    logoUrl: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.String;
  };
}

export interface UiComponentsServiceItem extends Schema.Component {
  collectionName: 'components_ui_components_service_items';
  info: {
    displayName: 'Service-Item';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface UiComponentsOurServicesSubItem extends Schema.Component {
  collectionName: 'components_ui_components_our_services_sub_items';
  info: {
    displayName: 'Our-Services-SubItem';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface UiComponentsOurServicesItem extends Schema.Component {
  collectionName: 'components_ui_components_our_services_items';
  info: {
    displayName: 'Our-Services-Item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    imageUrl: Attribute.Media<'images'> & Attribute.Required;
    subItems: Attribute.Component<'ui-components.our-services-sub-item', true> &
      Attribute.Required;
  };
}

export interface UiComponentsOption extends Schema.Component {
  collectionName: 'components_ui_components_options';
  info: {
    displayName: 'Option';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface UiComponentsLogo extends Schema.Component {
  collectionName: 'components_ui_components_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    imageUrl: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.String;
  };
}

export interface UiComponentsLocation extends Schema.Component {
  collectionName: 'components_ui_components_locations';
  info: {
    displayName: 'Location';
  };
  attributes: {
    imageUrl: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
  };
}

export interface UiComponentsJob extends Schema.Component {
  collectionName: 'components_ui_components_jobs';
  info: {
    displayName: 'Job';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['Full time', 'Part time', 'Hybrid']> &
      Attribute.Required &
      Attribute.DefaultTo<'Full time'>;
    location: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    timePosted: Attribute.String;
    salary: Attribute.String & Attribute.Required;
    salaryFreq: Attribute.Enumeration<['/mo', '/year']> &
      Attribute.Required &
      Attribute.DefaultTo<'/mo'>;
  };
}

export interface UiComponentsIndustryTab extends Schema.Component {
  collectionName: 'components_ui_components_industry_tabs';
  info: {
    displayName: 'Industry-Tab';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    imageUrl: Attribute.Media<'images'>;
    description: Attribute.Text & Attribute.Required;
    items: Attribute.Component<'ui-components.industry-tab-item', true>;
  };
}

export interface UiComponentsIndustryTabItem extends Schema.Component {
  collectionName: 'components_ui_components_industry_tab_items';
  info: {
    displayName: 'Industry-Tab-Item';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
  };
}

export interface UiComponentsImageLink extends Schema.Component {
  collectionName: 'components_ui_components_image_links';
  info: {
    displayName: 'Image-Link';
  };
  attributes: {
    imageUrl: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.String;
  };
}

export interface UiComponentsHeaderAction extends Schema.Component {
  collectionName: 'components_ui_components_header_actions';
  info: {
    displayName: 'HeaderAction';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    isActive: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    link: Attribute.String & Attribute.Required;
  };
}

export interface UiComponentsGoalItem extends Schema.Component {
  collectionName: 'components_ui_components_goal_items';
  info: {
    displayName: 'Goal-Item';
  };
  attributes: {
    imageUrl: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface UiComponentsFormField extends Schema.Component {
  collectionName: 'components_ui_components_form_fields';
  info: {
    displayName: 'FormField';
    description: '';
  };
  attributes: {
    placeholder: Attribute.String;
    isRequired: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    type: Attribute.Enumeration<
      ['number', 'text', 'textarea', 'dropdown', 'radio', 'checkbox']
    > &
      Attribute.Required;
    validPattern: Attribute.String;
    label: Attribute.String & Attribute.Required;
    options: Attribute.Component<'ui-components.option', true>;
  };
}

export interface UiComponentsFaQItem extends Schema.Component {
  collectionName: 'components_ui_components_fa_q_items';
  info: {
    displayName: 'FaQ-Item';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface UiComponentsCta extends Schema.Component {
  collectionName: 'components_ui_components_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

export interface UiComponentsContactCard extends Schema.Component {
  collectionName: 'components_ui_components_contact_cards';
  info: {
    displayName: 'Contact-Card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface UiComponentsCommonTab extends Schema.Component {
  collectionName: 'components_ui_components_common_tabs';
  info: {
    displayName: 'Common-Tab';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    items: Attribute.Component<'ui-components.image-link', true> &
      Attribute.Required;
  };
}

export interface UiComponentsBannerAction extends Schema.Component {
  collectionName: 'components_ui_components_banner_actions';
  info: {
    displayName: 'BannerAction';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    logoUrl: Attribute.Media<'images'> & Attribute.Required;
    imageUrl: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface UiComponentsApplicationStep extends Schema.Component {
  collectionName: 'components_ui_components_application_steps';
  info: {
    displayName: 'Application-Step';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    step: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface UiComponentsApplicationInfoLink extends Schema.Component {
  collectionName: 'components_ui_components_application_info_links';
  info: {
    displayName: 'Application-Info-Link';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    linkText: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface UiComponentsAction extends Schema.Component {
  collectionName: 'components_ui_components_actions';
  info: {
    displayName: 'Image-Button-CTA';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    imageUrl: Attribute.Media<'images'>;
  };
}

export interface SectionComponentsValues extends Schema.Component {
  collectionName: 'components_section_components_values';
  info: {
    displayName: 'Values';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    imageUrl: Attribute.Media<'images'>;
    trustedText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'100% trusted'>;
    items: Attribute.Component<'ui-components.value-item', true> &
      Attribute.Required;
  };
}

export interface SectionComponentsTeamSlider extends Schema.Component {
  collectionName: 'components_section_components_team_sliders';
  info: {
    displayName: 'Team-Slider';
  };
  attributes: {
    imageUrl: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface SectionComponentsServices extends Schema.Component {
  collectionName: 'components_section_components_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    boldSubtitle: Attribute.String;
    description: Attribute.Text;
    items: Attribute.Component<'ui-components.our-services-item', true> &
      Attribute.Required;
  };
}

export interface SectionComponentsServiceMainBanner extends Schema.Component {
  collectionName: 'components_section_components_service_main_banners';
  info: {
    displayName: 'Service-Main-Banner';
  };
  attributes: {
    bgMedia: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionComponentsServiceIndustries extends Schema.Component {
  collectionName: 'components_section_components_service_industries';
  info: {
    displayName: 'Service-Industries';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    tabs: Attribute.Component<'ui-components.industry-tab', true>;
  };
}

export interface SectionComponentsOurTeammates extends Schema.Component {
  collectionName: 'components_section_components_our_teammates';
  info: {
    displayName: 'Our Teammates';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    items: Attribute.Component<'ui-components.teammate-item', true>;
  };
}

export interface SectionComponentsOurStory extends Schema.Component {
  collectionName: 'components_section_components_our_stories';
  info: {
    displayName: 'Our Story';
    description: '';
  };
  attributes: {
    bgImage: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface SectionComponentsOurServices extends Schema.Component {
  collectionName: 'components_section_components_our_services';
  info: {
    displayName: 'Our Services';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    action: Attribute.Component<'ui-components.cta'>;
    items: Attribute.Component<'ui-components.service-item', true> &
      Attribute.Required;
    bgImage: Attribute.Media<'images'> & Attribute.Required;
    itemTitle: Attribute.String;
  };
}

export interface SectionComponentsOurLocations extends Schema.Component {
  collectionName: 'components_section_components_our_locations';
  info: {
    displayName: 'Our Locations';
  };
  attributes: {
    bgImage: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.Text & Attribute.Required;
    imageUrl: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface SectionComponentsLifeAtSiriusDigitechSlider
  extends Schema.Component {
  collectionName: 'components_section_components_life_at_sirius_digitech_sliders';
  info: {
    displayName: 'LifeAtSiriusDigitech-Slider';
  };
  attributes: {
    imageUrl: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface SectionComponentsJobProfile extends Schema.Component {
  collectionName: 'components_section_components_job_profiles';
  info: {
    displayName: 'JobProfile';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitel: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    jobs: Attribute.Component<'ui-components.job', true> & Attribute.Required;
  };
}

export interface SectionComponentsHeroBanner extends Schema.Component {
  collectionName: 'components_section_components_hero_banners';
  info: {
    displayName: 'Hero Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    action: Attribute.Component<'ui-components.cta'> & Attribute.Required;
    bannerActions: Attribute.Component<'ui-components.banner-action', true>;
  };
}

export interface SectionComponentsGetInTouchSection extends Schema.Component {
  collectionName: 'components_section_components_get_in_touch_sections';
  info: {
    displayName: 'GetInTouch-Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    bgImage: Attribute.Media<'images'>;
    button: Attribute.Component<'ui-components.cta'>;
  };
}

export interface SectionComponentsFaqSection extends Schema.Component {
  collectionName: 'components_section_components_faq_sections';
  info: {
    displayName: 'FAQ-Section';
    icon: '';
  };
  attributes: {
    bgImage: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    items: Attribute.Component<'ui-components.fa-q-item', true>;
  };
}

export interface SectionComponentsEntities extends Schema.Component {
  collectionName: 'components_section_components_entities';
  info: {
    displayName: 'Entities';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    bgImageUrl: Attribute.Media<'images'>;
    actions: Attribute.Component<'ui-components.action', true>;
  };
}

export interface SectionComponentsContent extends Schema.Component {
  collectionName: 'components_section_components_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    bgImage: Attribute.Media<'images'>;
    htmlContent: Attribute.RichText & Attribute.Required;
  };
}

export interface SectionComponentsContactUsForm extends Schema.Component {
  collectionName: 'components_section_components_contact_us_forms';
  info: {
    displayName: 'Contact Us Form';
    description: '';
  };
  attributes: {
    submitButtonLabel: Attribute.String & Attribute.Required;
    formFields: Attribute.Component<'ui-components.form-field', true> &
      Attribute.Required;
  };
}

export interface SectionComponentsBanner extends Schema.Component {
  collectionName: 'components_section_components_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    bgImage: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface SectionComponentsApplicationStepSection
  extends Schema.Component {
  collectionName: 'components_section_components_application_step_sections';
  info: {
    displayName: 'Application-Step-Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    bgImage: Attribute.Media<'images'>;
    description: Attribute.Text & Attribute.Required;
    links: Attribute.Component<'ui-components.application-info-link', true> &
      Attribute.Required;
    steps: Attribute.Component<'ui-components.application-step', true> &
      Attribute.Required;
  };
}

export interface SectionComponentsAboutSection extends Schema.Component {
  collectionName: 'components_section_components_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    imageUrl: Attribute.Media<'images'> & Attribute.Required;
    alt: Attribute.String;
    bgImage: Attribute.Media<'images'> & Attribute.Required;
    tabs: Attribute.Component<'ui-components.common-tab', true> &
      Attribute.Required;
  };
}

export interface SectionComponentsAboutMainBanner extends Schema.Component {
  collectionName: 'components_section_components_about_main_banners';
  info: {
    displayName: 'About-Main-Banner';
    description: '';
  };
  attributes: {
    bgImage: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui-components.value-item': UiComponentsValueItem;
      'ui-components.teammate-item': UiComponentsTeammateItem;
      'ui-components.story-item': UiComponentsStoryItem;
      'ui-components.story-images': UiComponentsStoryImages;
      'ui-components.social-link': UiComponentsSocialLink;
      'ui-components.service-item': UiComponentsServiceItem;
      'ui-components.our-services-sub-item': UiComponentsOurServicesSubItem;
      'ui-components.our-services-item': UiComponentsOurServicesItem;
      'ui-components.option': UiComponentsOption;
      'ui-components.logo': UiComponentsLogo;
      'ui-components.location': UiComponentsLocation;
      'ui-components.job': UiComponentsJob;
      'ui-components.industry-tab': UiComponentsIndustryTab;
      'ui-components.industry-tab-item': UiComponentsIndustryTabItem;
      'ui-components.image-link': UiComponentsImageLink;
      'ui-components.header-action': UiComponentsHeaderAction;
      'ui-components.goal-item': UiComponentsGoalItem;
      'ui-components.form-field': UiComponentsFormField;
      'ui-components.fa-q-item': UiComponentsFaQItem;
      'ui-components.cta': UiComponentsCta;
      'ui-components.contact-card': UiComponentsContactCard;
      'ui-components.common-tab': UiComponentsCommonTab;
      'ui-components.banner-action': UiComponentsBannerAction;
      'ui-components.application-step': UiComponentsApplicationStep;
      'ui-components.application-info-link': UiComponentsApplicationInfoLink;
      'ui-components.action': UiComponentsAction;
      'section-components.values': SectionComponentsValues;
      'section-components.team-slider': SectionComponentsTeamSlider;
      'section-components.services': SectionComponentsServices;
      'section-components.service-main-banner': SectionComponentsServiceMainBanner;
      'section-components.service-industries': SectionComponentsServiceIndustries;
      'section-components.our-teammates': SectionComponentsOurTeammates;
      'section-components.our-story': SectionComponentsOurStory;
      'section-components.our-services': SectionComponentsOurServices;
      'section-components.our-locations': SectionComponentsOurLocations;
      'section-components.life-at-sirius-digitech-slider': SectionComponentsLifeAtSiriusDigitechSlider;
      'section-components.job-profile': SectionComponentsJobProfile;
      'section-components.hero-banner': SectionComponentsHeroBanner;
      'section-components.get-in-touch-section': SectionComponentsGetInTouchSection;
      'section-components.faq-section': SectionComponentsFaqSection;
      'section-components.entities': SectionComponentsEntities;
      'section-components.content': SectionComponentsContent;
      'section-components.contact-us-form': SectionComponentsContactUsForm;
      'section-components.banner': SectionComponentsBanner;
      'section-components.application-step-section': SectionComponentsApplicationStepSection;
      'section-components.about-section': SectionComponentsAboutSection;
      'section-components.about-main-banner': SectionComponentsAboutMainBanner;
    }
  }
}
