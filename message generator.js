const messageInfo = {
    names: ["Matt", "Fred", "Jane", "Linda", "Martin", "Bob", "Sharon"],
    manufacturers: ["Honda", "Yamaha", "Suzuki", "Kawasaki"],
    pace: ["FAST!", "nice and steady", "like a cruiser"]
};

    let finalMessage=[];

    
const random = (array) => {
     return array[Math.floor(Math.random() * array.length)]
}
finalMessage.push(`Hi ${random(messageInfo.names)} i hear you want to ride a motorcycle.`,

                  `If you are going to ride a ${random(messageInfo.manufacturers)}`,
                  
                  `You will have to ride it ${random(messageInfo.pace)}`);

console.log(finalMessage);

    