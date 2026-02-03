# How to Publish 'Fiona Organics' for Free

Since your website is built with **PHP** (`index.php`, `send_mail.php`), you cannot use standard static hosts like GitHub Pages or Vercel directly unless you convert the code. You need a host that supports **PHP + MySQL**.

Here is the best free method to host your PHP site and connect your custom domain (`fionaorganics.com`).

## Option 1: InfinityFree (Recommended for PHP)
InfinityFree is one of the few hosts that offers **Free PHP Hosting** and allows you to bring your own **Custom Domain**.

### Step 1: Sign Up
1. Go to [InfinityFree.com](https://www.infinityfree.com/).
2. Click **Register** and create an account.

### Step 2: Create a Hosting Account
1. Inside the InfinityFree dashboard, click **"Create Account"**.
2. **Domain Type**: Choose **"Custom Domain"**.
3. **Domain Name**: Enter `fionaorganics.com`.
4. **IMPORTANT**: It will ask you to change your nameservers. You must go to your domain registrar (where you bought the domain, e.g., GoDaddy, Namecheap) and change the Nameservers to:
   - `ns1.epizy.com`
   - `ns2.epizy.com`
5. Once you update the nameservers, click **Check Availability** and finish creating the account. note: It might take a few hours for the domain changes to propagate.

### Step 3: Upload Your Website
1. In the InfinityFree dashboard, click **"Manage"** next to your new account.
2. Click **"File Manager"** (or "Online File Manager").
3. You will see a folder called `htdocs`. **Open `htdocs`**.
4. Delete the default `index2.html` or `default.php` if you see them.
5. **Upload**: 
   - I have created a file called `website-fibona-deploy.zip` in your project folder.
   - You can verify if the file manager allows ZIP uploads (often they extract automatically). 
   - If not, you simply upload the *contents* of your project folder (index.php, style.css, assets/, includes/) directly into `htdocs`.
   
### Step 4: Fix Email Deliverability
**Warning**: Free hosts often block the PHP `mail()` function (used in `send_mail.php`) to prevent spam.
If your "Contact Us" form does not send emails:
1. Sign up for a free service like [Formspree](https://formspree.io/).
2. Create a form there and get your endpoint URL.
3. Update your HTML form explicitly or we can modify `send_mail.php` to use SMTP (requires a Gmail app password).

---

## Option 2: Static Hosting (Netlify/Vercel) - Better Performance
If you are willing to make the site "Static" (mostly HTML) and use a third-party service for the contact form, this option is **much faster and more reliable**.

1. We convert `index.php` to `index.html`.
2. We change the form to use Formspree.
3. We upload to **Netlify** (drag and drop).
4. You add your domain in Netlify DNS settings.

### Want to try Option 2?
Let me know, and I can convert your PHP files to HTML files for you right now.
