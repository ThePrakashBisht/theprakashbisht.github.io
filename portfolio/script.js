// Initialize Lucide Icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
        menuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
        lucide.createIcons();
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.innerHTML = `<i data-lucide="menu"></i>`;
            lucide.createIcons();
        });
    });

    // --- Header Scroll Effect ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-[#F2F2F2]/95', 'backdrop-blur-sm', 'border-b', 'border-[#232323]/10');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('bg-[#F2F2F2]/95', 'backdrop-blur-sm', 'border-b', 'border-[#232323]/10');
            header.classList.add('bg-transparent');
        }
    });

    // --- Experience Accordion ---
    const expItems = document.querySelectorAll('.experience-item');
    
    expItems.forEach(item => {
        const headerBtn = item.querySelector('.exp-header');
        const content = item.querySelector('.exp-content');
        const iconContainer = item.querySelector('.exp-icon');

        headerBtn.addEventListener('click', () => {
            // Close others (optional - remove this block if you want multiple open)
            expItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('border-[#232323]');
                    otherItem.querySelector('.exp-content').classList.add('hidden');
                    otherItem.querySelector('.exp-icon').innerHTML = `<i data-lucide="chevron-down" class="w-4"></i>`;
                }
            });

            // Toggle Current
            const isHidden = content.classList.contains('hidden');
            if (isHidden) {
                content.classList.remove('hidden');
                item.classList.add('border-[#232323]');
                iconContainer.innerHTML = `<i data-lucide="chevron-up" class="w-4"></i>`;
            } else {
                content.classList.add('hidden');
                item.classList.remove('border-[#232323]');
                iconContainer.innerHTML = `<i data-lucide="chevron-down" class="w-4"></i>`;
            }
            lucide.createIcons();
        });
    });

    // --- Tech Stack Tabs ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => {
                b.classList.remove('active', 'bg-[#232323]', 'text-white');
                b.classList.add('bg-transparent');
            });

            // Hide all contents
            tabContents.forEach(c => c.classList.add('hidden'));

            // Activate clicked button
            const tabId = btn.getAttribute('data-tab');
            btn.classList.add('active', 'bg-[#232323]', 'text-white');
            btn.classList.remove('bg-transparent');

            // Show corresponding content
            document.getElementById(tabId).classList.remove('hidden');
        });
    });

    // Style the default active tab button on load
    const activeTab = document.querySelector('.tab-btn.active');
    if(activeTab) {
        activeTab.classList.add('bg-[#232323]', 'text-white');
    }
});

// Extra CSS for Tabs to work with Tailwind classes
const style = document.createElement('style');
style.textContent = `
    .tab-btn {
        border: 1px solid rgba(35, 35, 35, 0.2);
        padding: 8px 16px;
        font-family: 'Space Mono', monospace;
        font-size: 12px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.2s;
    }
`;
document.head.appendChild(style);