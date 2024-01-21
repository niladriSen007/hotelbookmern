import bcrypt from "bcryptjs"

export const hashPassword = async (pass: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(pass, salt);
    return hashedPass;
}