const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.card-dropdown');

dropdownBtn.addEventListener('click', () => {
    dropdownContent.style.display =
        dropdownContent.style.display === 'block' ? 'none' : 'block';

    // Toggle arrow direction
    dropdownBtn.innerHTML =
        dropdownContent.style.display === 'block' ? 'Details &#x25B2;' : 'Details &#x25BC;';
});

const dropdownBtn1 = document.querySelector('.dropdown-btn1');
const dropdownContent1 = document.querySelector('.card-dropdown1');

dropdownBtn1.addEventListener('click', () => {
    dropdownContent1.style.display =
        dropdownContent1.style.display === 'block' ? 'none' : 'block';

    // Toggle arrow direction
    dropdownBtn1.innerHTML =
        dropdownContent1.style.display === 'block' ? 'Details &#x25B2;' : 'Details &#x25BC;';
});

const dropdownBtn2 = document.querySelector('.dropdown-btn2');
const dropdownContent2 = document.querySelector('.card-dropdown2');

dropdownBtn2.addEventListener('click', () => {
    dropdownContent2.style.display =
        dropdownContent2.style.display === 'block' ? 'none' : 'block';

    // Toggle arrow direction
    dropdownBtn2.innerHTML =
        dropdownContent2.style.display === 'block' ? 'Details &#x25B2;' : 'Details &#x25BC;';
});




function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//-----------nav---------------//

