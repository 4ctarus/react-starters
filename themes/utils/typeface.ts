import { CSS } from '@stitches/react';

type Slug =
  | 'display'
  | 'display-large'
  | 'display-small'
  | 'headline'
  | 'headline-large'
  | 'headline-small'
  | 'title'
  | 'title-large'
  | 'title-small'
  | 'body'
  | 'body-large'
  | 'body-small'
  | 'label'
  | 'label-large'
  | 'label-small';

const typefaces: Record<Slug, CSS> = {
  display: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '2.813rem',
    lineHeight: '3.25rem',
  },
  'display-large': {
    fontSize: '3.563rem',
    lineHeight: '4rem',
    letterSpacing: '-0.016rem',
  },
  'display-small': {
    fontSize: '2.25rem',
    lineHeight: '2.75rem',
  },
  headline: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.75rem',
    lineHeight: '2.25rem',
  },
  'headline-large': {
    fontSize: '2rem',
    lineHeight: '2.5rem',
  },
  'headline-small': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.006rem',
  },
  'title-large': {
    fontWeight: '500',
    fontSize: '1.375rem',
    lineHeight: '1.75rem',
    letterSpacing: '0',
  },
  'title-small': {
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.006rem',
  },
  body: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.016rem',
  },
  'body-large': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.031rem',
  },
  'body-small': {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.025rem',
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.031rem',
  },
  'label-large': {
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.006rem',
  },
  'label-small': {
    fontWeight: '500',
    fontSize: '0.688rem',
    lineHeight: '1rem',
    letterSpacing: '0.031rem',
  },
};

const typeface = (slug: Slug) => typefaces[slug];

export default typeface;
