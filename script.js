let generateOTP = () => {
  //Define the length of the OTP
  const otpLength = 4;

  // Generate a random numeric OTP with exactly 4 digits
  const otp = Math.floor(1000 + Math.random() * 9000);

  //Display the generated OTP
  document.getElementById("otpDisplay").innerText = `${otp}`;
};

document.getElementById("generateBtn").addEventListener("click", generateOTP);
window.addEventListener("load", generateOTP);