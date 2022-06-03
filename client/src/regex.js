/* 
    Username Regex:
        - Only contains alphanumeric characters, underscore and dot.
        - Underscore and dot can't be at the end or start of a username (e.g _username / username_ / .username / username.).
        - Underscore and dot can't be next to each other (e.g user_.name).
        - Underscore or dot can't be used multiple times in a row (e.g user__name / user..name).
        - Number of characters must be between 8 to 20.
*/
export const validUsername = new RegExp(
  "^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
);



/*
       Password must be a minimum of 8 characters including numbers, upper, lower And 
       one special character.
*/
export const validPassword = new RegExp(
  // eslint-disable-next-line
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
)