export {AntBuddy} from './antbuddy';
export type {Config} from './antbuddy';
export type {
  Account,
  Attachment,
  Customer,
  CustomerMetadata,
  Message,
  User,
  WidgetSettings,
} from './types';
export {
  isAgentMessage,
  isCustomerMessage,
  isValidUuid,
  setupCustomEventHandlers,
  setupPostMessageHandlers,
  shouldActivateGameMode,
} from './utils';
export {
  fetchWidgetSettings,
  updateWidgetSettingsMetadata,
  createNewCustomer,
  isValidCustomer,
  updateCustomerMetadata,
  findCustomerByExternalId,
  createNewConversation,
  fetchCustomerConversations,
  upload,
} from './api';
export {getUserInfo} from './info';
