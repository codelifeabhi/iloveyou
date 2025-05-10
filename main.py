import smtplib
from tkinter import Tk, Button, Label

# Function to send email
def send_email():
    try:
        # Email configuration
        email = "your_email@example.com"  # Your email
        password = "your_password"         # Your email password
        to_email = "recipient@example.com" # Recipient's email
        subject = "Positive Message"
        message = "You pressed YES! Keep up the great work!"

        # Create the email content
        email_message = f'Subject: {subject}\n\n{message}'

        # Sending the email
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()  # Secure the connection
            server.login(email, password)
            server.sendmail(email, to_email, email_message)
            print("Email sent successfully!")

    except Exception as e:
        print(f"Failed to send email: {e}")

# Function to handle button press
def on_yes_pressed():
    send_email()
    show_press['text'] = 'You pressed YES!'

# Setting up the GUI
root = Tk()
root.title("Email Sender")

show_press = Label(root, text='Press YES to send a positive message')
show_press.pack()

yes_button = Button(root, text='YES', command=on_yes_pressed)
yes_button.pack()

root.mainloop()