export const PSEUDO_ACTION = 'PSEUDO_ACTION';

export function pseudoAction(value, field) {
  return {
    type: PSEUDO_ACTION,
    name: value,
    field: field,
  };
}

export const EMAIL_ACTION = 'EMAIL_ACTION';

export function emailAction(value, field) {
  return {
    type: EMAIL_ACTION,
    email: value,
    field: field,
  };
}

export const TOPIC_ACTION = 'TOPIC_ACTION';

export function topicAction(value, field) {
  return {
    type: TOPIC_ACTION,
    topic: value,
    field: field,
  };
}

export const MESSAGE_ACTION = 'MESSAGE_ACTION';

export function messageAction(value, field) {
  return {
    type: MESSAGE_ACTION,
    message: value,
    field: field,
  };
}

export const POST_MESSAGE = 'POST_MESSAGE';

export function postMessage() {
  return {
    type: POST_MESSAGE,
  };
}

export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';

export function postMessageSuccess(modal) {
  return {
    type: POST_MESSAGE_SUCCESS,
    modal: !modal,
  };
}
