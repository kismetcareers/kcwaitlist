import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Thanks for Joining the Waitlist, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://nextjs-notion-waitlist.vercel.app/waitlist-logo.png`}
          width="220"
          height="100"
          alt="Kismet Careers Waitlist Logo"
          style={logo}
        />
        <Text style={greeting}>Hey {userFirstname},</Text>
        <Text style={paragraph}>
          Great news—you’re officially on the waitlist for our Job Application Submission Service! 📝✨
        </Text>
        <Text style={paragraph}>
          That means you're one step closer to hassle-free job applications (because, let’s be honest, 
          job hunting should be way easier). We’re working behind the scenes to make everything just right, 
          and you’ll be the first to know when we’re ready to roll!</Text>
        <Text style={paragraph}>In the meantime, if you have any questions, ideas, or just want to say hi, {" "}
          <a href="mailto:kismetcareers@gmail.com" style={link}>
            hit reply {""}
          </a>
          —  we’re all ears (and keyboards). 🖥️💡
        </Text>
        <Text style={paragraph}>
          You can also follow us on TikTok for updates:{" "}
          <a href="https://www.tiktok.com/@kismetcareers" style={link}>
            @kismetcareers
          </a>
        </Text>
        <Text style={paragraph}>
          Stay tuned, stay awesome, and we’ll be in touch soon! 🚀
        </Text>
        <Text style={signOff}>
          The Kismet Careers Team
          <br />
          kismetcareers@gmail.com
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Kismet Careers waitlist.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default NotionWaitlistEmail;

const main = {
  background: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#F7FF9B",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
