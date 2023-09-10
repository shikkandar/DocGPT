import crypto from 'crypto';

 const passwordHash = (password) => {
  try {
    const sha256Hash = crypto.createHash('sha256');
    sha256Hash.update(password);
    return sha256Hash.digest('hex');
  } catch (error) {
    console.error('Error creating password hash:', error);
    throw error;
  }
};

export default passwordHash;
