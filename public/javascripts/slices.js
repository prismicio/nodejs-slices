$(document).ready(function () {
    (function Slider() {

        function previous(e) {
            e.preventDefault();

            var $slides = $(this).parent('.slides');

            var $current = $slides.find('.slide.active'),
                $prev = $current.prev('.slide');

            if (!$prev.length) {
                $prev = $slides.find('.slide:last');
            }

            $current.removeClass('active');

            $prev.addClass('active');
        }

        function next(e) {
            e.preventDefault();
            var $slides = $(this).parent('.slides');

            var $current = $slides.find('.slide.active'),
                $next = $current.next('.slide');

            if (!$next.length) {
                $next = $slides.find('.slide:first');
            }

            $current.removeClass('active');

            $next.addClass('active');
        }

        // Preload image

        $('.slides [data-illustration]').each(function() {

            var url = $(this).data('illustration');

            var image = new Image();

            image.src = url;

        });
        $('.slides .arrow-prev').on('click', previous);
        $('.slides .arrow-next').on('click', next);

    })();

    (function FeaturedItemPreview() {

        function select() {
            var paneId = $(this).attr('data-paneid');
            var $previewPane = $(this).parents('.featured-preview').find('.preview-pane');
            $previewPane.find('.preview-image').css('opacity', 0);
            $previewPane.find('.preview-image[data-paneid="' + paneId + '"]').css('opacity', 1);
        }

        $('.featured-preview [data-paneid]').on('mouseenter', select);
        $('.featured-preview [data-paneid]').first().map(select);
    })();


    (function Map() {

        $('.contact-us .map').each(function() {

            var mapEl = this,
                $map = $(mapEl),
                address = $map.data('address');

            if(address) {

                new google.maps.Geocoder().geocode({address: address}, function(results, status) {

                    if(results && results[0]) {

                        var location = results[0].geometry.location;
                        var map = new google.maps.Map(mapEl, {
                            center: location,
                            zoom: 16,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        });

                        map.setOptions({styles: [
                            {
                                "featureType": "poi",
                                "stylers": [
                                    { "saturation": -100 },
                                    { "visibility": "off" }
                                ]
                            },{
                                "stylers": [
                                    { "saturation": -100 }
                                ]
                            }
                        ]});


                        var marker = new google.maps.Marker({
                            position: location,
                            map: map
                        });

                    }

                });

            }

        });


    })();

})