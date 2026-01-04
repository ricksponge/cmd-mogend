
import { DeploymentProject, Environment, Action } from './types';

export const PROJECTS: DeploymentProject[] = [
  { id: 'datafari-core', name: 'Datafari Core', icon: '🔍', playbook: 'install.yml' },
  { id: 'frontend-ui', name: 'Frontend MORICE', icon: '🎨', playbook: 'install.yml' },
  { id: 'solr-engine', name: 'Solr Search', icon: '⚡', playbook: 'install.yml' },
  { id: 'mcf-connector', name: 'MCF Connectors', icon: '🔗', playbook: 'install.yml' },
  { id: 'apache-sso', name: 'Apache & SSO', icon: '🔐', playbook: 'install.yml' },
];

export const ENVIRONMENTS = [
  { value: 'qual', label: 'Qualif (Vert)', color: 'bg-emerald-600' },
  { value: 'preprod', label: 'Preprod (Bleu)', color: 'bg-blue-600' },
  { value: 'prod', label: 'Production (Rouge)', color: 'bg-rose-600' },
];

export const PHASES = [
  { value: 'phase_precheck', label: 'Precheck', icon: '📋' },
  { value: 'phase_install', label: 'Installation', icon: '📥' },
  { value: 'phase_configuration', label: 'Config Globale', icon: '⚙️' },
  { value: 'phase_frontend', label: 'Frontend', icon: '🖥️' },
  { value: 'phase_services', label: 'Services (SSO)', icon: '🌐' },
  { value: 'phase_start', label: 'Start / Monit', icon: '🚀' },
  { value: 'phase_deployment', label: 'Déploiement', icon: '📦' },
  { value: 'full_pipeline', label: 'Pipeline Complète', icon: '⚡' },
  { value: 'phase_backup', label: 'Backup', icon: '💾' },
];

export const COMMON_GROUPS = [
  { id: 'all', label: 'Tous (all)' },
  { id: 'main', label: 'Main' },
  { id: 'solr', label: 'Solr Nodes' },
  { id: 'mcf1', label: 'MCF1' },
  { id: 'mcf2', label: 'MCF2' },
];

export const SPECIFIC_TAGS = [
  'uninstall', 'ssh', 'finger', 'java_env', 'replace_certs', 
  'verif_certilibre', 'datafari_properties', 'application_properties', 
  'build_front', 'sidebar', 'tika', 'apache_sso_cors', 'monitor_script', 
  'nftables', 'fetch_log', 'lancement', 'widget', 'solr', 'mcf', 'verif', 'copie', 'logs'
];

export const ACTIONS = [
  { value: Action.DEPLOY, label: 'Run Playbook', icon: '▶️' },
  { value: Action.MAINTENANCE, label: 'Maintenance', icon: '🛠️' },
];
