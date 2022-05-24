import 'regenerator-runtime/runtime';
import {AntBuddy} from './index';

const w = window as any;
const config = (w.AntBuddy && w.AntBuddy.config) || {};
const {
  accountId,
  customerId,
  baseUrl,
  greeting,
  awayMessage,
  customer,
  debug,
  setInitialMessage,
  onSetCustomerId,
  onSetConversationId,
  onSetWidgetSettings,
  onPresenceSync,
  onConversationCreated,
  onMessageCreated,
  onMessagesUpdated,
} = config;

if (!accountId) {
  throw new Error('An account token is required to start AntBuddy!');
}

AntBuddy.init({
  accountId,
  customerId,
  baseUrl,
  greeting,
  awayMessage,
  customer,
  debug,
  setInitialMessage,
  onSetCustomerId,
  onSetConversationId,
  onSetWidgetSettings,
  onPresenceSync,
  onConversationCreated,
  onMessageCreated,
  onMessagesUpdated,
});
