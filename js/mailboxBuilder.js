// ===================================================
// MAILBOX BUILDER
// ---------------------------------------------------
// Builds the player's mailbox.
// ===================================================

const MailboxBuilder = {

    build(x, y) {

        return {

            id: "mailbox",

            x,
            y,

            ...FarmObjectRegistry.mailbox

        };

    }

};