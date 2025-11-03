from django.shortcuts import render,redirect
from django.http import HttpResponse

# def home(request):
#     return HttpResponse("Welcome to my portfolio!")

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def resume(request):
    return render(request, 'resume.html')

def contact_page(request):
    # Simply render the contact page
    return render(request, 'contact.html')

def submit_contact(request):
    if request.method == 'POST':
        # --- IMPORTANT: THIS IS WHERE YOU HANDLE THE FORM DATA ---
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        # 1. Validation (e.g., check for spam, minimum length)
        # 2. Send Email (Use Django's send_mail function)
        # 3. Save to Database (Optional, for backup)

        # Example placeholder for sending an email (You'll need to set up EMAIL_HOST in settings.py)
        # from django.core.mail import send_mail
        # send_mail(subject, message, email, ['your_email@example.com'])

        # After processing, redirect to a thank-you page or the contact page itself
        return redirect('contact') # or a 'thank_you' page

    return redirect('contact')