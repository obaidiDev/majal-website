import yaml from 'js-yaml'

// YAML files are imported as raw strings (Vite `?raw`) and parsed at runtime.
// This keeps all site content editable in plain YAML under /data.
import siteRaw from '../data/site.yaml?raw'
import goalsRaw from '../data/goals.yaml?raw'
import impactRaw from '../data/impact.yaml?raw'
import programsRaw from '../data/programs.yaml?raw'
import testimonialsRaw from '../data/testimonials.yaml?raw'

export const site = yaml.load(siteRaw)
export const goals = yaml.load(goalsRaw)
export const impact = yaml.load(impactRaw)
export const programs = yaml.load(programsRaw)
export const testimonials = yaml.load(testimonialsRaw)
