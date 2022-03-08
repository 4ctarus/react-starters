import { CSS } from '@stitches/react';

enum Slug {
  DISPLAY = 'display',
  'DISPLAY_LARGE' = 'display-large',
  'DISPLAY_SMALL' = 'display-small',
  HEADLINE = 'headline',
  'HEADLINE_LARGE' = 'headline-large',
  'HEADLINE_SMALL' = 'headline-small',
  TITLE = 'title',
  'TITLE_LARGE' = 'title-large',
  'TITLE_SMALL' = 'title-small',
  BODY = 'body',
  'BODY_LARGE' = 'body-large',
  'BODY_SMALL' = 'body-small',
  LABEL = 'label',
  'LABEL_LARGE' = 'label-large',
  'LABEL_SMALL' = 'label-small',
}

const typefaces: Record<string, CSS> = {
  [`${Slug.DISPLAY}`]: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '2.813rem',
    lineHeight: '3.25rem',
  },
  [`${Slug.DISPLAY_LARGE}`]: {
    fontSize: '3.563rem',
    lineHeight: '4rem',
    letterSpacing: '-0.016rem',
  },
  [`${Slug.DISPLAY_SMALL}`]: {
    fontSize: '2.25rem',
    lineHeight: '2.75rem',
  },
  [`${Slug.HEADLINE}`]: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.75rem',
    lineHeight: '2.25rem',
  },
  [`${Slug.HEADLINE_LARGE}`]: {
    fontSize: '2rem',
    lineHeight: '2.5rem',
  },
  [`${Slug.HEADLINE_SMALL}`]: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
  [`${Slug.TITLE}`]: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.006rem',
  },
  [`${Slug.TITLE_LARGE}`]: {
    fontWeight: '500',
    fontSize: '1.375rem',
    lineHeight: '1.75rem',
    letterSpacing: '0',
  },
  [`${Slug.LABEL_SMALL}`]: {
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.006rem',
  },
  [`${Slug.BODY}`]: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.016rem',
  },
  [`${Slug.BODY_LARGE}`]: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.031rem',
  },
  [`${Slug.BODY_SMALL}`]: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.025rem',
  },
  [`${Slug.LABEL}`]: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.031rem',
  },
  [`${Slug.LABEL_LARGE}`]: {
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.006rem',
  },
  [`${Slug.LABEL_SMALL}`]: {
    fontWeight: '500',
    fontSize: '0.688rem',
    lineHeight: '1rem',
    letterSpacing: '0.031rem',
  },
};

const typeface = (slug: Slug) => typefaces[slug];

export default typeface;
