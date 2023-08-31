const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar? O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write( "\n\n" + questions[index] + " > ");
}
ask();

const anwers = [];

process.stdin.on("data", data => {
    anwers.push(data.toString().trim() + "\n");
    if(anwers.length < questions.length){
        ask(anwers.length);
    }
    else{
        process.exit(); 
    }
});

process.on('exit', () =>{
    console.log(
        `
        O que você aprendeu hoje foi: 
        ${anwers[0]}

        O que te aborreceu hoje foi:
        ${anwers[1]},

        O que você poderia melhora hoje, O que te deixou feliz foi:
        ${anwers[2]}

        Você ajudou ${anwers[3]} pessoas hoje!
        Volte amanhã para mais reflexões.
        `
    );
})