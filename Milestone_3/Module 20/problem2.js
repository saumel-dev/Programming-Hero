function validOtp(otp) {
  if (typeof otp != 'string') {
    return 'Invalid';
  }
  else if (typeof otp == 'string' && otp.startsWith('ph-') && otp.length == 8) {
    return true;
  }
  else return false;
}