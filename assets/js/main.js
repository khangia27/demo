var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');

        mobileMenu.onclick = function() {
            var isClosed = header.clientHeight === 46;
            if (isClosed) {
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
        }

        const buyBtns = document.querySelectorAll('.js-buy-tickets')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal-close')
        const modalContainer = document.querySelector('.js-modal-container')

        // hàm hiển thị modal mua vé 
        function showBuyTickets() {
            modal.classList.add('open')
        }

        // hàm ẩn modal mua vé 
        function hideBuyTickets() {
            modal.classList.remove('open')
            
        }
        modal.onclick = function() {
            modal.classList.remove('open')
        }

        // lặp qua từng thẻ button và nghe hành vi click 
        for (const buyBtn of buyBtns ) {
            buyBtn.addEventListener('click', showBuyTickets)
        }
        
        // Nghe hành vi click vào nút btton close
        modalClose.addEventListener('click', hideBuyTickets)

        modalContainer.addEventListener('click', function(event) {
            event.stopPropagation()
        })


        // Tự đôngj đóng khi chọn menu

        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];
            
            menuItem.onclick = function (event) {
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
                if  (isParentMenu) {
                    event.preventDefault();
                } else {
                    header.style.height = null;
                }
                // Bắt sự kiện thẻ a chứa subnav
                var btnSubNav = document.querySelector('.js-mobile-btn-subnav');

                // Bắt class subnav trong thẻ a
                var jsSubNav = document.querySelector('.js-mobile-subnav');
                var subNavOpened = false;
                btnSubNav.onclick = function (e) {
                    if (window.matchMedia('(max-width: 739px)').matches) {
                        subNavOpened = !subNavOpened;
                        if (subNavOpened) {
                            jsSubNav.style.display = 'block';
                            } else {
                                jsSubNav.style.display = null;
                            }
                        }
                    }
            }
        }

        // Bắt sự kiện thẻ a chứa subnav
        var btnSubNav = document.querySelector('.js-mobile-btn-subnav');

        // Bắt class subnav trong thẻ a
        var jsSubNav = document.querySelector('.js-mobile-subnav');
        var subNavOpened = false;
        btnSubNav.onclick = function (e) {
            if (window.matchMedia('(max-width: 739px)').matches) {
                subNavOpened = !subNavOpened;
                if (subNavOpened) {
                    jsSubNav.style.display = 'block';
                    } else {
                    jsSubNav.style.display = null;
                    }
                }
            }