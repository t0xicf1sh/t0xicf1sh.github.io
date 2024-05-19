document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameForm = document.getElementById('usernameForm');
    const username = document.getElementById('username').value;
    const ratingResult = document.getElementById('ratingResult');
    const displayUsername = document.getElementById('displayUsername');
    const ratingNumber = document.getElementById('ratingNumber');
    const ratingMessage = document.getElementById('ratingMessage');
    const ratingGif = document.getElementById('ratingGif');
    const cheatingMessage = document.getElementById('cheatingMessage');

    if (usernameForm.dataset.submitted === "true") {
        ratingResult.classList.add('hidden');
        cheatingMessage.classList.remove('hidden');
        return;
    }

    displayUsername.textContent = username;

    const randomRating = Math.floor(Math.random() * 11);
    ratingNumber.textContent = randomRating;

    const messages = [
        "Better luck next time, champ!",
        "Well, that wasn't a total disaster!",
        "Meh, could be better!",
        "Keep on truckin'!",
        "You're almost there, kinda!",
        "A for effort, my friend!",
        "Nice work, superstar!",
        "Awesome sauce!",
        "Fantabulous!",
        "You totally crushed it!",
        "Perfection achieved!"
    ];
    

    const gifs = [
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGwwcHB5dm56eWE2M2JvZHZ4NzFnMnU5dml3ZDA5dTNtY3k5ODE2ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cr9vIO7NsP5cY/giphy.gif', // 0
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdjdmxneGl0Y3J3emFuanNiNTVyZHhoZjEycGJpbnQzaXlxd2V3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EWa8mPhRyph09Ee1tb/giphy.gif', // 1
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3h6bWNoMHQzd2UwenF4OTNpamJmdXpiam05bnhnb2hwcWgybWQ0diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Cti4bhg5lolJLlLeTF/giphy.gif', // 2
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm9jbms3YjZ0OXlnbGJranpndTY0NzV4bnp5b3duNWZhZm1mNmt0YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jQKDm5BdcuhQvaRGw9/giphy.gif', // 3
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHI2YzdkNmg4NGI5OTlyMmg1b3EzZjhjdDRpaXkxcnAyc3BoZzZoOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6JyUeFlmDB4zUT0wTb/giphy.gif', // 4
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnNsdmRjeDRpZ3BiajN3ejE0eXUyemd6NWN1OGN1dmNlMXR2eWF5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YJFFvzx81OW506Buuv/giphy.gif', // 5
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnZ1NThobGh5Y3Awd2lrZnAycWswbDFwbThoNmFrZXBzYXk1M3F2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fXK6nNrqoW9NNWWcPD/giphy.gif', // 6
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazgyNWFjbXp4dWpjM3BlMHlyNHI3MDZoMmw0a3gxbjFtbDVsZnFteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sQuHLqjWwRXGvrjkg0/giphy.gif', // 7
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzl5b3ltenFudmZucTdxMW1na3lsYWJjaWt5OHM3eXBybXM5NHY0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9owDYRzSFRaxVSnb0N/giphy.gif', // 8
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGR0aWI3d2JqdHd5M2pyaDFpMG1memIzdmZkeGZkcmhuNjBsbHZxOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h3IYrMhAEZvC7nzCt4/giphy.gif', // 9
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3duZTAyMGhiNmZvZ2o5MzllMG9pZzFibTd0c2N5cnE3aG5rc3ZidyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lSPtp0kCFqKsgtsQ8k/giphy-downsized-large.gif'  // 10
    ];

    ratingMessage.textContent = messages[randomRating];
    ratingGif.src = gifs[randomRating];
    ratingGif.alt = `Rating ${randomRating} GIF`;

    ratingResult.classList.remove('hidden');
    cheatingMessage.classList.add('hidden');

    usernameForm.dataset.submitted = "true";
});
