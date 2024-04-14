import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (
    email: string,
    token: string,
) => {
    const resetLink = `http://portfolio.thomastomanec.cz/auth/new-password?token=${token}`

    await resend.emails.send({
        from: "reset_tomanec@thomastomanec.cz",
        to: email,
        subject: "Reset your password",
        html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
    });
};

export const sendVerificationEmail = async (
    email: string,
    token: string
) => {
    const confirmLink = `http://portfolio.thomastomanec.cz/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "verification_tomanec@thomastomanec.cz",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
    });
}

