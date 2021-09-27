const fs = require('fs');
async function Op(){
    try{
        await fs.writeFileSync('./bye.txt','helooooooooooooooooooooooooooooo')
        const file = await fs.readFileSync('./bye.txt');
        console.log(file.toString())
        await fs.unlinkSync('./bye.txt')
    }catch (e) {
        console.log(e)
    }
}
Op()