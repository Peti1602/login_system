import smtplib

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

sender_email_address = 'blasko.peter.hu@gmail.com'
sender_email_password = 'Madrid1975'
receiver_email_address = 'blaskopeter@t-online.hu'

email_subject_line = "Practise"
email_body = 'Hello Peter!'

msg = MIMEMultipart()
msg['from'] = sender_email_address
msg['to'] = receiver_email_address
msg['subject'] = email_subject_line
msg.attach(MIMEText(email_body, 'plain'))

email_content = msg.as_string()
server = smtplib.SMTP('smtp.gmail.com:587')
server.starttls()
server.login(sender_email_address, sender_email_password)
server.sendmail(sender_email_address, receiver_email_address, email_content)
server.quit()
