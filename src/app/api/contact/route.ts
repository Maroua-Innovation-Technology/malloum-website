import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Configuration du transporteur SMTP AWS WorkMail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true', // true pour port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Vérifier la connexion SMTP
    await transporter.verify();

    // Préparer le contenu HTML avec le template
    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f7fa;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #2563eb, #4f46e5);
            padding: 40px 30px;
            text-align: center;
        }
        .logo-circle {
            width: 150px;
            height: 70px;
            background: rgba(255, 255, 255, 0.2);
            border: 3px solid white;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .logo-text {
            color: white;
            font-size: 36px;
            font-weight: 700;
            letter-spacing: 2px;
        }
        .header-title {
            color: white;
            font-size: 24px;
            font-weight: 600;
            margin: 0;
        }
        .content {
            padding: 40px 30px;
        }
        .notice {
            background: #eff6ff;
            border-left: 4px solid #2563eb;
            padding: 16px 20px;
            margin-bottom: 30px;
            border-radius: 4px;
        }
        .notice-text {
            color: #1e40af;
            font-size: 14px;
            margin: 0;
            line-height: 1.6;
        }
        .info-row {
            margin: 20px 0;
            padding-bottom: 20px;
            border-bottom: 1px solid #e5e7eb;
        }
        .info-row:last-of-type {
            border-bottom: none;
        }
        .info-label {
            color: #6b7280;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }
        .info-value {
            color: #111827;
            font-size: 16px;
            word-break: break-word;
        }
        .info-value a {
            color: #2563eb;
            text-decoration: none;
        }
        .info-value a:hover {
            text-decoration: underline;
        }
        .message-section {
            margin: 30px 0;
        }
        .message-label {
            color: #374151;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 12px;
        }
        .message-content {
            background: #f9fafb;
            padding: 20px;
            border-radius: 6px;
            color: #374151;
            font-size: 15px;
            line-height: 1.7;
            white-space: pre-wrap;
        }
        .cta {
            text-align: center;
            margin: 35px 0;
        }
        .cta-text {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 16px;
        }
        .btn {
            display: inline-block;
            background: linear-gradient(135deg, #2563eb, #4f46e5);
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            font-size: 15px;
        }
        .footer {
            background: #f9fafb;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
        }
        .footer-logo-circle {
            width: 100px;
            height: 60px;
            background: linear-gradient(135deg, #2563eb, #4f46e5);
            border: 2px solid #e5e7eb;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 12px;
        }
        .footer-logo-text {
            color: white;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 1px;
        }
        .footer-company {
            color: #111827;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .footer-info {
            color: #6b7280;
            font-size: 13px;
            line-height: 1.8;
        }
        .footer-info a {
            color: #2563eb;
            text-decoration: none;
        }
        .footer-note {
            color: #9ca3af;
            font-size: 12px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo-circle">
                <div class="logo-text">MIT</div>
            </div>
            <h1 class="header-title">Nouveau message - Malloum</h1>
        </div>
        
        <div class="content">
            <div class="notice">
                <p class="notice-text">
                    📬 Vous avez reçu un nouveau message depuis le formulaire de contact. Notre équipe vous répondra rapidement.
                </p>
            </div>
            
            <div class="info-row">
                <div class="info-label">Nom</div>
                <div class="info-value">${name}</div>
            </div>
            
            <div class="info-row">
                <div class="info-label">Email</div>
                <div class="info-value">
                    <a href="mailto:${email}">${email}</a>
                </div>
            </div>
            
            <div class="info-row">
                <div class="info-label">Téléphone</div>
                <div class="info-value">${phone || 'Non renseigné'}</div>
            </div>
            
            <div class="info-row">
                <div class="info-label">Sujet</div>
                <div class="info-value">${subject}</div>
            </div>
            
            <div class="message-section">
                <div class="message-label">Message</div>
                <div class="message-content">${message}</div>
            </div>
            
            <div class="cta">
                <p class="cta-text">Notre équipe prendra contact avec ce visiteur</p>
                <a href="mailto:${email}?subject=Re: ${subject}" class="btn">
                    Répondre
                </a>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-logo-circle">
                <div class="footer-logo-text">MIT</div>
            </div>
            <div class="footer-company">Maroua Innovation Technology</div>
            <div class="footer-info">
                Hardé, Maroua - Cameroun<br>
                📧 <a href="mailto:contact@mit.cm">contact@mit.cm</a><br>
                📞 +237 672 277 579 | +237 691 805 321<br>
                🌐 <a href="https://mit.cm">mit.cm</a>
            </div>
            <div class="footer-note">
                Message envoyé depuis malloum.cm
            </div>
        </div>
    </div>
</body>
</html>
    `;

    // Envoyer l'email
    const info = await transporter.sendMail({
      from: `"Malloum Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `[Contact Malloum] ${subject}`,
      html: htmlContent,
      text: `
Nouveau message de contact

Nom: ${name}
Email: ${email}
Téléphone: ${phone || 'Non renseigné'}
Sujet: ${subject}

Message:
${message}

---
Message envoyé depuis malloum.cm
      `,
    });

    console.log('Email envoyé avec succès:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi du message',
        details: error.message 
      },
      { status: 500 }
    );
  }
}