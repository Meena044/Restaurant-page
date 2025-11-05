// timing
    let timing = document.createElement('div');
    timing.id = 'timing';
    main.append(timing);

    const hoursTitle = document.createElement('h1');
    hoursTitle.textContent = "Hours";
    hoursTitle.id = 'subtitle';
    timing.append(hoursTitle);

    const hours = document.createElement('ul');

    const hoursList = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm','Wednesday: 6am - 6pm', 'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm'];

    hoursList.forEach(item => {
         const hoursList = document.createElement('li');
         hoursList.textContent = item;
         hours.append(hoursList);
    });

    timing.append(hours);
   