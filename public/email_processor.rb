require 'net/smtp'
def email_message(from_email, to_email)
  puts "#{from_email} and #{to_email}"

message = <<MESSAGE_END
From: Private Person <#{from_email}>
To: A Test User <#{to_email}>
Subject: SMTP e-mail test

This is a test e-mail message.
MESSAGE_END

Net::SMTP.start('localhost') do |smtp|
  smtp.send_message message, from_email,
                             to_email
end
end

