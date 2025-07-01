// Email structure are available in the /src/utils/email.js file

I want to update the design of this HTML snippet.

Below is the CURRENT structure and my UPDATED version.

Please apply the updated HTML structure but make sure to PRESERVE all dynamic variables like {email}, {password}, {username}, etc. exactly as they are.

CURRENT:

<div class="form-item">
    <label>Email</label>
    <input type="text" value="{email}" />
</div>

UPDATED:

<div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" class="form-control" id="email" name="email" value="{email}" />
</div>
