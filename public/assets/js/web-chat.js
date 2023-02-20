var appConfig = {

    accountSid: "ACf582bce82d0cf47ba7fe6ad0d976c054",
    flexFlowSid: "FO842f74b050048b30fc3ce9f25b334abb",
    context: {
        friendlyName: ""
    },
    fileAttachment: {
        enabled: true
    },
    startEngagementOnInit: false,

    preEngagementConfig: {

        description: "Completa los datos",
        fields: [
            {
                label: "Cuál es su nombre?",
                type: "InputItem",
                attributes: {
                    name: "friendlyName",
                    type: "text",
                    required: true,
                }
            },
            {
                label: "Cuál es su correo?",
                type: "InputItem",
                attributes: {
                    name: "mail",
                    type: "email",
                    required: true,
                }
            },
        ],
        submitLabel: "Pasar al chat"
    }

};

var Twilio = window.Twilio
if (Twilio) {

    Twilio.FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = false;
    Twilio.FlexWebChat.MessagingCanvas.defaultProps.showTypingIndicator = false;
    Twilio.FlexWebChat.MainHeader.defaultProps.titleText = "Chat de soporte Helpia";
    Twilio.FlexWebChat.MainHeader.defaultProps.showImage = false;
    Twilio.FlexWebChat.EntryPoint.defaultProps.tagline = "Contáctanos";

    Twilio.FlexWebChat.createWebChat(appConfig).then(webchat => {
        const {manager} = webchat;

        //Posting question from preengagement form as users first chat message
        Twilio.FlexWebChat.Actions.on("preEngagementConfig", (payload) => {

            const {question} = payload.formData;
            if (!question)
                return;

            const {channelSid} = manager.store.getState().flex.session;
            manager
                .chatClient.getChannelBySid(channelSid)
                .then(channel => channel.sendMessage(question));
        });
        // Changing the Welcome message|
        manager.strings.WelcomeMessage = "Hola bienvenido a Helpia";
        manager.strings.MessageCanvasTrayContent = "Gracias por comunicarte con Helpia esperamos que haya podido resolver su consulta ";
        manager.strings.MessageInputContent = "Escriba aquí...";
        manager.strings.MessageCanvasTrayButton = "Iniciar nuevo chat";
        manager.strings.Today = "conversación ";
        manager.strings.InputPlaceHolder = "Escriba aquí...";
        manager.strings.FieldValidationRequiredField = "Campo requerido";

        // Render WebChat
        webchat.init();
    });
}
