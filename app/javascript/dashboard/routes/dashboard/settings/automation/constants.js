import {
  OPERATOR_TYPES_1,
  OPERATOR_TYPES_2,
  OPERATOR_TYPES_3,
  OPERATOR_TYPES_6,
} from './operators';

export const AUTOMATIONS = {
  message_created: {
    conditions: [
      {
        key: 'message_type',
        name: 'Message Type',
        attributeI18nKey: 'MESSAGE_TYPE',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'content',
        name: 'Message Content',
        attributeI18nKey: 'MESSAGE_CONTAINS',
        inputType: 'comma_separated_plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'email',
        name: 'Email',
        attributeI18nKey: 'EMAIL',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'inbox_id',
        name: 'Caixa de entrada',
        attributeI18nKey: 'INBOX',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'conversation_language',
        name: 'Linguagem de conversa',
        attributeI18nKey: 'CONVERSATION_LANGUAGE',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'phone_number',
        name: 'Número de telefone',
        attributeI18nKey: 'PHONE_NUMBER',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_6,
      },
    ],
    actions: [
      {
        key: 'assign_agent',
        name: 'Atribuir ao agente',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'assign_team',
        name: 'Atribuir uma equipe',
        attributeI18nKey: 'ASSIGN_TEAM',
      },
      {
        key: 'add_label',
        name: 'Adicionar etiqueta',
        attributeI18nKey: 'ADD_LABEL',
      },
      {
        key: 'remove_label',
        name: 'Remover etiqueta',
        attributeI18nKey: 'REMOVE_LABEL',
      },
      {
        key: 'send_email_to_team',
        name: 'Envie um e-mail para a equipe',
        attributeI18nKey: 'SEND_EMAIL_TO_TEAM',
      },
      {
        key: 'send_message',
        name: 'Send a message',
        attributeI18nKey: 'SEND_MESSAGE',
      },
      {
        key: 'send_email_transcript',
        name: 'Envie uma transcrição por e-mail',
        attributeI18nKey: 'SEND_EMAIL_TRANSCRIPT',
      },
      {
        key: 'mute_conversation',
        name: 'Silenciar conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'snooze_conversation',
        name: 'Adiar conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },

      {
        key: 'resolve_conversation',
        name: 'Resolver conversa',
        attributeI18nKey: 'RESOLVE_CONVERSATION',
      },
      {
        key: 'send_webhook_event',
        name: 'Enviar evento de webhook',
        attributeI18nKey: 'SEND_WEBHOOK_EVENT',
      },
      {
        key: 'send_attachment',
        name: 'Send Attachment',
        attributeI18nKey: 'SEND_ATTACHMENT',
      },
    ],
  },
  conversation_created: {
    conditions: [
      {
        key: 'status',
        name: 'Status',
        attributeI18nKey: 'STATUS',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'browser_language',
        name: 'Idioma do navegador',
        attributeI18nKey: 'BROWSER_LANGUAGE',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'mail_subject',
        name: 'Assunto do e-mail',
        attributeI18nKey: 'MAIL_SUBJECT',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'country_code',
        name: 'País',
        attributeI18nKey: 'COUNTRY_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'phone_number',
        name: 'Número de telefone',
        attributeI18nKey: 'PHONE_NUMBER',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_6,
      },
      {
        key: 'referer',
        name: 'Link de referência',
        attributeI18nKey: 'REFERER_LINK',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'email',
        name: 'Email',
        attributeI18nKey: 'EMAIL',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'inbox_id',
        name: 'Caixa de entrada',
        attributeI18nKey: 'INBOX',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'conversation_language',
        name: 'Linguagem de conversa',
        attributeI18nKey: 'CONVERSATION_LANGUAGE',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'priority',
        name: 'Prioridade',
        attributeI18nKey: 'PRIORITY',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
    ],
    actions: [
      {
        key: 'assign_agent',
        name: 'Atribuir ao agente',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'assign_team',
        name: 'Atribuir uma equipe',
        attributeI18nKey: 'ASSIGN_TEAM',
      },
      {
        key: 'assign_agent',
        name: 'Assign an agent',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'send_email_to_team',
        name: 'Envie um e-mail para a equipe',
        attributeI18nKey: 'SEND_EMAIL_TO_TEAM',
      },
      {
        key: 'send_message',
        name: 'Send a message',
        attributeI18nKey: 'SEND_MESSAGE',
      },
      {
        key: 'send_email_transcript',
        name: 'Envie uma transcrição por e-mail',
        attributeI18nKey: 'SEND_EMAIL_TRANSCRIPT',
      },
      {
        key: 'mute_conversation',
        name: 'Silenciar conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'snooze_conversation',
        name: 'Adiar conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'resolve_conversation',
        name: 'Resolver conversa',
        attributeI18nKey: 'RESOLVE_CONVERSATION',
      },
      {
        key: 'send_webhook_event',
        name: 'Enviar evento de webhook',
        attributeI18nKey: 'SEND_WEBHOOK_EVENT',
      },
      {
        key: 'send_attachment',
        name: 'Send Attachment',
        attributeI18nKey: 'SEND_ATTACHMENT',
      },
    ],
  },
  conversation_updated: {
    conditions: [
      {
        key: 'status',
        name: 'Status',
        attributeI18nKey: 'STATUS',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'browser_language',
        name: 'Idioma do navegador',
        attributeI18nKey: 'BROWSER_LANGUAGE',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'mail_subject',
        name: 'Assunto do e-mail',
        attributeI18nKey: 'MAIL_SUBJECT',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'country_code',
        name: 'País',
        attributeI18nKey: 'COUNTRY_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'referer',
        name: 'Link de referência',
        attributeI18nKey: 'REFERER_LINK',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'phone_number',
        name: 'Número de telefone',
        attributeI18nKey: 'PHONE_NUMBER',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_6,
      },
      {
        key: 'assignee_id',
        name: 'Assignee',
        attributeI18nKey: 'ASSIGNEE_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_3,
      },
      {
        key: 'team_id',
        name: 'Team',
        attributeI18nKey: 'TEAM_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_3,
      },
      {
        key: 'email',
        name: 'Email',
        attributeI18nKey: 'EMAIL',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'inbox_id',
        name: 'Caixa de entrada',
        attributeI18nKey: 'INBOX',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'conversation_language',
        name: 'Linguagem de conversa',
        attributeI18nKey: 'CONVERSATION_LANGUAGE',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'priority',
        name: 'Prioridade',
        attributeI18nKey: 'PRIORITY',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
    ],
    actions: [
      {
        key: 'assign_agent',
        name: 'Atribuir ao agente',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'assign_team',
        name: 'Atribuir uma equipe',
        attributeI18nKey: 'ASSIGN_TEAM',
      },
      {
        key: 'assign_agent',
        name: 'Assign an agent',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'send_email_to_team',
        name: 'Envie um e-mail para a equipe',
        attributeI18nKey: 'SEND_EMAIL_TO_TEAM',
      },
      {
        key: 'send_message',
        name: 'Send a message',
        attributeI18nKey: 'SEND_MESSAGE',
      },
      {
        key: 'send_email_transcript',
        name: 'Envie uma transcrição por e-mail',
        attributeI18nKey: 'SEND_EMAIL_TRANSCRIPT',
      },
      {
        key: 'mute_conversation',
        name: 'Silenciar conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'snooze_conversation',
        name: 'Adiar conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'resolve_conversation',
        name: 'Resolver conversa',
        attributeI18nKey: 'RESOLVE_CONVERSATION',
      },
      {
        key: 'send_webhook_event',
        name: 'Enviar evento de webhook',
        attributeI18nKey: 'SEND_WEBHOOK_EVENT',
      },
      {
        key: 'send_attachment',
        name: 'Send Attachment',
        attributeI18nKey: 'SEND_ATTACHMENT',
      },
    ],
  },
  conversation_opened: {
    conditions: [
      {
        key: 'browser_language',
        name: 'Idioma do navegador',
        attributeI18nKey: 'BROWSER_LANGUAGE',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'email',
        name: 'Email',
        attributeI18nKey: 'EMAIL',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'mail_subject',
        name: 'Assunto do e-mail',
        attributeI18nKey: 'MAIL_SUBJECT',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'country_code',
        name: 'País',
        attributeI18nKey: 'COUNTRY_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'referer',
        name: 'Link de referência',
        attributeI18nKey: 'REFERER_LINK',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_2,
      },
      {
        key: 'assignee_id',
        name: 'Assignee',
        attributeI18nKey: 'ASSIGNEE_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_3,
      },
      {
        key: 'phone_number',
        name: 'Número de telefone',
        attributeI18nKey: 'PHONE_NUMBER',
        inputType: 'plain_text',
        filterOperators: OPERATOR_TYPES_6,
      },
      {
        key: 'team_id',
        name: 'Team',
        attributeI18nKey: 'TEAM_NAME',
        inputType: 'search_select',
        filterOperators: OPERATOR_TYPES_3,
      },
      {
        key: 'inbox_id',
        name: 'Caixa de entrada',
        attributeI18nKey: 'INBOX',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'conversation_language',
        name: 'Linguagem de conversa',
        attributeI18nKey: 'CONVERSATION_LANGUAGE',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
      {
        key: 'priority',
        name: 'Prioridade',
        attributeI18nKey: 'PRIORITY',
        inputType: 'multi_select',
        filterOperators: OPERATOR_TYPES_1,
      },
    ],
    actions: [
      {
        key: 'assign_agent',
        name: 'Atribuir ao agente',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'assign_team',
        name: 'Atribuir uma equipe',
        attributeI18nKey: 'ASSIGN_TEAM',
      },
      {
        key: 'assign_agent',
        name: 'Assign an agent',
        attributeI18nKey: 'ASSIGN_AGENT',
      },
      {
        key: 'send_email_to_team',
        name: 'Envie um e-mail para a equipe',
        attributeI18nKey: 'SEND_EMAIL_TO_TEAM',
      },
      {
        key: 'send_message',
        name: 'Send a message',
        attributeI18nKey: 'SEND_MESSAGE',
      },
      {
        key: 'send_email_transcript',
        name: 'Envie uma transcrição por e-mail',
        attributeI18nKey: 'SEND_EMAIL_TRANSCRIPT',
      },
      {
        key: 'mute_conversation',
        name: 'Silenciar conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'snooze_conversation',
        name: 'Adiar conversa',
        attributeI18nKey: 'MUTE_CONVERSATION',
      },
      {
        key: 'send_webhook_event',
        name: 'Enviar evento de webhook',
        attributeI18nKey: 'SEND_WEBHOOK_EVENT',
      },
      {
        key: 'send_attachment',
        name: 'Send Attachment',
        attributeI18nKey: 'SEND_ATTACHMENT',
      },
    ],
  },
};

export const AUTOMATION_RULE_EVENTS = [
  {
    key: 'conversation_created',
    value: 'Conversa Criada',
  },
  {
    key: 'conversation_updated',
    value: 'Conversa Atualizada',
  },
  {
    key: 'message_created',
    value: 'Mensagem Criada',
  },
  {
    key: 'conversation_opened',
    value: 'Conversa Aberta',
  },
];

export const AUTOMATION_ACTION_TYPES = [
  {
    key: 'assign_agent',
    label: 'Atribuir ao agente',
    inputType: 'search_select',
  },
  {
    key: 'assign_team',
    label: 'Atribuir uma equipe',
    inputType: 'search_select',
  },
  {
    key: 'add_label',
    label: 'Adicionar etiqueta',
    inputType: 'multi_select',
  },
  {
    key: 'remove_label',
    label: 'Remover etiqueta',
    inputType: 'multi_select',
  },
  {
    key: 'send_email_to_team',
    label: 'Envie um e-mail para a equipe',
    inputType: 'team_message',
  },
  {
    key: 'send_email_transcript',
    label: 'Envie uma transcrição por e-mail',
    inputType: 'email',
  },
  {
    key: 'mute_conversation',
    label: 'Silenciar conversa',
    inputType: null,
  },
  {
    key: 'snooze_conversation',
    label: 'Adiar conversa',
    inputType: null,
  },
  {
    key: 'resolve_conversation',
    label: 'Resolver conversa',
    inputType: null,
  },
  {
    key: 'send_webhook_event',
    label: 'Enviar evento de webhook',
    inputType: 'url',
  },
  {
    key: 'send_attachment',
    label: 'Enviar anexo',
    inputType: 'attachment',
  },
  {
    key: 'send_message',
    label: 'Enviar mensagem',
    inputType: 'textarea',
  },
  {
    key: 'change_priority',
    label: 'Alterar Prioridade',
    inputType: 'search_select',
  },
  {
    key: 'add_sla',
    label: 'Add SLA',
    inputType: 'search_select',
  },
];
