import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { matchedData, validationResult } from "express-validator";
//if (process.env.NODE_ENV !== "production") process.loadEnvFile();

const ses = new SESv2Client({ region: process.env.AWS_REGION });
const oneLine = (s) => s.replace(/[\r\n]+/g, " ");

export async function postContact(req, res, next) {
  try {
    if (req.body?.website) return res.status(204).end();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const { name, email, message } = matchedData(req);

    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: process.env.MAIL_FROM,
        Destination: { ToAddresses: [process.env.MAIL_TO] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: {
              Data: `Contact form: ${oneLine(name)}`.slice(0, 150),
              Charset: "UTF-8",
              Charset: "UTF-8",
            },
            Body: {
              Text: {
                Data: `From: ${oneLine(name)} <${email}>\n\n${message}`,
                Charset: "UTF-8",
              },
            },
          },
        },
      }),
    );

    res.status(204).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
}
