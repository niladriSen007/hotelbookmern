import bcrypt from "bcryptjs"

export const comparePassword = async (pass: string,userPass:string) => {
    const hashedPass = await bcrypt.compare(pass, userPass);
    return hashedPass;
}