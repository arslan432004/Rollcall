

const loginsanitiser = (req, res, next)=>{


    function trimit (obj){

      for (let key in obj){
        if(typeof obj[key] ==="string"){
            obj[key] = obj[key].trim();
        }
      }
    }


    function escapeHTML(str){

          return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");



    }

    function xssClean(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        obj[key] = escapeHTML(obj[key]);
      }
    }
  }

  // validation rules 

  function validate(body){

    if(!body.email && !body.regnumber) return {success: false, error: "Please enter email OR registration number."};

 
    if (body.email) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(body.email)) {
        return { success: false, error: "Invalid email format." };
      }
    }


    if (body.regnumber) {
      if (body.regnumber.length < 4) {
        return { success: false, error: "Registration number is too short." };
      }
    }


    if (!body.password || body.password.length < 3) {
      return { success: false, error: "Password is required." };
    }

    return {success: true};

  }


  const validationResult = validate(req.body);
  if (!validationResult.success) {
    console.log("LOGIN VALIDATION FAILED:", validationResult.error);
    return res.status(400).json({ error: validationResult.error });
  }

  trimit(req.body);
  // Lowercase email for consistent lookup
  if (req.body.email) {
    req.body.email = req.body.email.toLowerCase();
  }
  // Don't escape password - it needs special characters
  const password = req.body.password;
  xssClean(req.body);
  // Restore original password
  req.body.password = password;

  console.log("LOGIN SANITIZER PASSED - PROCEEDING TO CONTROLLER");
  next();



};

export default loginsanitiser;