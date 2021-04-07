$(document).ready(function ($) {
    /* Menu */

    $(".navigation  ul li ul").parent("li").addClass("parent-list");
    $(".parent-list").find("a:first").append(" <span class='menu-nav-arrow'><i class='icon-angle-down'></i></span>");

    $(".navigation ul a").removeAttr("title");
    $(".navigation ul ul").css({ display: "none" });
    $(".navigation ul li").each(function () {
        var sub_menu = $(this).find("ul:first");
        $(this).hover(function () {
            sub_menu.stop().css({ overflow: "hidden", height: "auto", display: "none", paddingTop: 0 }).slideDown(250, function () {
                $(this).css({ overflow: "visible", height: "auto" });
            });
        }, function () {
            sub_menu.stop().slideUp(250, function () {
                $(this).css({ overflow: "hidden", display: "none" });
            });
        });
    });

    /* Header fixed */

    var aboveHeight = $("#header").outerHeight();
    var fixed_enabled = $("#wrap").hasClass("fixed-enabled");
    if (fixed_enabled) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > aboveHeight) {
                $("#header").css({ "top": "0" }).addClass("fixed-nav");
            } else {
                $("#header").css({ "top": "auto" }).removeClass("fixed-nav");
            }
        });
    } else {
        $("#header").removeClass("fixed-nav");
    }

    /* Header and footer fix mobile */

    $(window).bind("resize", function () {
        if ($(this).width() > 990) {
            $(".navigation_mobile_main").addClass("navigation");
            $(".navigation").removeClass("navigation_mobile");
            $(".navigation").find(".navigation_mobile_click").remove();
        } else {
            $(".navigation").addClass("navigation_mobile");
            $(".navigation").addClass("navigation_mobile_main");
            $(".navigation_mobile").removeClass("navigation");
            $(".navigation_mobile").each(function () {
                if (!$(this).find(".navigation_mobile_click").length) {
                    $(this).prepend("<div class='navigation_mobile_click'>Go to...</div>");
                }
            });
        }
        if ($(this).width() < 465) {
            $(".social_icons").each(function () {
                if ($(this).find("li").length > 10) {
                    $(this).find("li i").addClass("font11");
                    $(this).find("li i").removeClass("font17");
                }
            });
        } else {
            $(".social_icons").each(function () {
                if ($(this).find("li").length > 10) {
                    $(this).find("li i").addClass("font17");
                    $(this).find("li i").removeClass("font11");
                }
            });
        }

        if ($(this).width() < 767) {
            $(".panel-pop").each(function () {
                var panel_pop = $(this);
                var panel_width = panel_pop.outerWidth();
                panel_pop.css("margin-left", "-" + panel_width / 2 + "px");
            });
        }
    });

    if ($(this).width() < 767) {
        $(".panel-pop").each(function () {
            var panel_pop = $(this);
            var panel_width = panel_pop.outerWidth();
            panel_pop.css("margin-left", "-" + panel_width / 2 + "px");
        });
    }

    if ($(window).width() < 465) {
        $(".social_icons").each(function () {
            if ($(this).find("li").length > 10) {
                $(this).find("li i").addClass("font11");
                $(this).find("li i").removeClass("font17");
            }
        });
    } else {
        $(".social_icons").each(function () {
            if ($(this).find("li").length > 10) {
                $(this).find("li i").addClass("font17");
                $(this).find("li i").removeClass("font11");
            }
        });
    }

    if ($(window).width() > 990) {
        $(".navigation_mobile_main").addClass("navigation");
        $(".navigation").removeClass("navigation_mobile");
        $(".navigation").find(".navigation_mobile_click").unbind("click");
        $(".navigation").find(".navigation_mobile_click").remove();
    } else {
        $(".navigation").addClass("navigation_mobile");
        $(".navigation").addClass("navigation_mobile_main");
        $(".navigation_mobile").removeClass("navigation");
        $(".navigation_mobile").each(function () {
            if (!$(this).find(".navigation_mobile_click").length) {
                $(this).prepend("<div class='navigation_mobile_click'>Go to...</div>");
            }
        });
    }

    $(document).on("click", ".navigation_mobile_click", function () {
        if ($(".navigation_mobile_click").length) {
            if ($(this).hasClass("navigation_mobile_click_close")) {
                $(this).next().slideUp(500);
                $(this).removeClass("navigation_mobile_click_close");
            } else {
                $(this).next().slideDown(500);
                $(this).addClass("navigation_mobile_click_close");
            }
        }
    });

    /* Go up */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".go-up").css("right", "20px");
        } else {
            $(".go-up").css("right", "-60px");
        }
    });
    $(".go-up").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    /* Icon boxes */

    $(".box_warp").each(function () {
        var box_warp = $(this);
        var box_background = box_warp.attr("box_background");
        var box_color = box_warp.attr("box_color");
        var box_border = box_warp.attr("box_border");
        var box_border_width = box_warp.attr("box_border_width");
        var box_border_radius = box_warp.attr("box_border_radius");
        var box_background_hover = box_warp.attr("box_background_hover");
        var box_color_hover = box_warp.attr("box_color_hover");
        var box_border_hover = box_warp.attr("box_border_hover");

        box_warp.css({ "background-color": box_background, "border-color": box_border, "color": box_color, "-moz-border-radius": box_border_radius + "px", "-webkit-border-radius": box_border_radius + "px", "border-radius": box_border_radius + "px" });

        if (box_border_width != "") {
            box_warp.css("border", box_border_width + "px solid " + box_border);
        }

        box_warp.find("a").not(".button").css({ "color": box_color });

        box_warp.hover(function () {
            box_warp.css({ "background-color": box_background_hover, "border-color": box_border_hover, "color": box_color_hover });
            box_warp.find("a").not(".button").css({ "color": box_color_hover });
        }, function () {
            box_warp.css({ "background-color": box_background, "border-color": box_border, "color": box_color });
            box_warp.find("a").not(".button").css({ "color": box_color });
        });
    });

    $(".box_icon").each(function () {
        var box_icon = $(this);
        var icon_align = box_icon.find(".icon_i > span").attr("icon_align");
        var icon_size = box_icon.find(".icon_i > span").attr("icon_size");

        if (box_icon.find(".icon_i > span").hasClass("icon_soft_r") || box_icon.find(".icon_i > span").hasClass("icon_square") || box_icon.find(".icon_i > span").hasClass("icon_circle")) {
            box_icon.find(".icon_i > span").css({ "height": icon_size + "px", "width": icon_size + "px", "font-size": icon_size / 2 + "px", "line-height": icon_size + "px" });
            box_icon.find(".icon_i > span > span").css({ "margin": 0, "text-align": "center" }).parent().css({ "line-height": icon_size + "px" });
        } else if (box_icon.find(".box_text h3 > span").hasClass("icon_soft_r") || box_icon.find(".box_text h3 > span").hasClass("icon_square") || box_icon.find(".box_text h3 > span").hasClass("icon_circle")) {
            if (icon_size > 80 && box_icon.find(".box_text h3 > span > span").length == 1) {
                var icon_size = 80;
            }
            box_icon.find(".box_text h3 > span").css({ "height": icon_size + "px", "width": icon_size + "px", "line-height": icon_size + "px" });
        } else {
            box_icon.find(".icon_i > span i").css({ "font-size": icon_size / 2 + "px" });
        }

        if (icon_align == "left") {
            box_icon.find(".icon_i").css({ "display": "inherit" });
            if (box_icon.find(".icon_i > span").hasClass("icon_soft_r") || box_icon.find(".icon_i > span").hasClass("icon_square") || box_icon.find(".icon_i > span").hasClass("icon_circle")) {
                box_icon.find(".box_text").css({ "padding-left": parseFloat(icon_size) + 25 + "px" });
            } else if (box_icon.find(".icon_i span[class^='icons']").length == 1) {
                box_icon.find(".box_text").css({ "padding-left": 41 + "px" });
            } else {
                box_icon.find(".box_text").css({ "padding-left": parseFloat(icon_size / 2) + 15 + "px" });
            }

            box_icon.find(".icon_i > span").addClass("f_left");
        } else if (icon_align == "right") {
            box_icon.find(".icon_i").css({ "display": "inherit" });

            if (box_icon.find(".icon_i > span").hasClass("icon_soft_r") || box_icon.find(".icon_i > span").hasClass("icon_square") || box_icon.find(".icon_i > span").hasClass("icon_circle")) {
                box_icon.find(".box_text").css({ "padding-right": parseFloat(icon_size) + 25 + "px" });
            } else if (box_icon.find(".icon_i span[class^='icons']").length == 1) {
                box_icon.find(".box_text").css({ "padding-right": 41 + "px" });
            } else {
                box_icon.find(".box_text").css({ "padding-right": parseFloat(icon_size / 2) + 15 + "px" });
            }

            box_icon.find(".icon_i > span").addClass("f_right");
        } else if (icon_align == "center") {
            box_icon.find(".icon_i").addClass("t_center");
        }
    });

    $(".box_icon").each(function () {
        var this_icon = $(this);
        var span_bg = this_icon.find(".icon_i > span").attr("span_bg");
        if (span_bg != undefined) {
            this_icon.find(".icon_i > span").css({ "background-color": span_bg });
        } else {
            var span_bg = this_icon.find(".box_text h3 > span").attr("span_bg");
            this_icon.find(".box_text h3 > span").css({ "background-color": span_bg });
        }
        var i_color = this_icon.find(".icon_i > span i").attr("i_color");
        if (i_color != undefined) {
            this_icon.find(".icon_i > span i").css({ "color": i_color });
        }
        var border_radius = this_icon.find(".icon_i > span").attr("border_radius");
        if (border_radius != undefined) {
            this_icon.find(".icon_i > span").css({ "-moz-border-radius": border_radius + "px", "-webkit-border-radius": border_radius + "px", "border-radius": border_radius + "px" });
        }

        var border_color = this_icon.find(".icon_i > span").attr("border_color");
        if (border_color != undefined) {
            this_icon.find(".icon_i > span").css({ "border-color": border_color });
            this_icon.find(".box_text h3 > span").css({ "border-color": border_color });
        } else {
            var border_color = this_icon.find(".box_text h3 > span").attr("border_color");
            this_icon.find(".box_text h3 > span").css({ "border-color": border_color });
        }
        var border_width = this_icon.find(".icon_i > span").attr("border_width");
        if (border_width != undefined) {
            this_icon.find(".icon_i > span").css({ "border-width": border_width + "px", "border-style": "solid" });
        } else {
            var border_width = this_icon.find(".box_text h3 > span").attr("border_width");
            this_icon.find(".box_text h3 > span").css({ "border-width": border_width + "px", "border-style": "solid" });
        }

        this_icon.hover(function () {
            var span_hover = this_icon.find(".icon_i > span").attr("span_hover");
            if (span_hover != undefined) {
                this_icon.find(".icon_i > span").css({ "background-color": span_hover });
            } else {
                var span_hover = this_icon.find(".box_text h3 > span").attr("span_hover");
                this_icon.find(".box_text h3 > span").css({ "background-color": span_hover });
            }
            var border_hover = this_icon.find(".icon_i > span").attr("border_hover");
            if (border_hover != undefined) {
                this_icon.find(".icon_i > span").css({ "border-color": border_hover });
            } else {
                var border_hover = this_icon.find(".box_text h3 > span").attr("border_hover");
                this_icon.find(".box_text h3 > span").css({ "border-color": border_hover });
            }
            var i_hover = this_icon.find(".icon_i > span i").attr("i_hover");
            if (i_hover != undefined) {
                this_icon.find(".icon_i > span i").css({ "color": i_hover });
            }

            if (this_icon.find(".button").length) {
                var button_background_hover = this_icon.find(".button").attr("button_background_hover");
                var button_color_hover = this_icon.find(".button").attr("button_color_hover");
                var button_border_hover = this_icon.find(".button").attr("button_border_hover");
                this_icon.find(".button").css({ "background-color": button_background_hover, "color": button_color_hover, "border-color": button_border_hover });
            }
        }, function () {
            if (i_color != undefined) {
                this_icon.find(".icon_i > span i").css({ "color": i_color });
            }
            var span_bg = this_icon.find(".icon_i > span").attr("span_bg");
            if (span_bg != undefined) {
                this_icon.find(".icon_i > span").css({ "background-color": span_bg });
            } else {
                var span_bg = this_icon.find(".box_text h3 > span").attr("span_bg");
                this_icon.find(".box_text h3 > span").css({ "background-color": span_bg });
            }
            var border_color = this_icon.find(".icon_i > span").attr("border_color");
            if (border_color != undefined) {
                this_icon.find(".icon_i > span").css({ "border-color": border_color });
            } else {
                var border_color = this_icon.find(".box_text h3 > span").attr("border_color");
                this_icon.find(".box_text h3 > span").css({ "border-color": border_color });
            }
            if (this_icon.find(".button").length) {
                var button_background = this_icon.find(".button").attr("button_background");
                var button_color = this_icon.find(".button").attr("button_color");
                var button_border = this_icon.find(".button").attr("button_border");
                this_icon.find(".button").css({ "background-color": button_background, "color": button_color, "border-color": button_border });
            }
        });
    });

    /* Icons */

    $(".icon_i").each(function () {
        var this_icon = $(this);
        if (!this_icon.parent().hasClass("box_icon") && !this_icon.parent().parent().hasClass("box_icon") && !this_icon.parent().parent().parent().hasClass("box_icon")) {
            var span_bg = this_icon.find("> span").attr("span_bg");
            var icon_align = this_icon.find("> span").attr("icon_align");
            var icon_size = this_icon.find("> span").attr("icon_size");
            var border_color = this_icon.find("> span").attr("border_color");
            var border_width = this_icon.find("> span").attr("border_width");
            var border_radius = this_icon.find("> span").attr("border_radius");
            var span_hover = this_icon.find("> span").attr("span_hover");
            var border_hover = this_icon.find("> span").attr("border_hover");
            var i_color = this_icon.find("> span i").attr("i_color");
            var i_hover = this_icon.find("> span i").attr("i_hover");

            if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                this_icon.find("> span").css({ "height": icon_size + "px", "width": icon_size + "px", "font-size": icon_size / 2 + "px", "line-height": icon_size + "px" });
                this_icon.find("> span > span").css({ "margin": 0, "text-align": "center" });
            } else {
                this_icon.find("> span i").css({ "font-size": icon_size / 2 + "px" });
            }

            if (icon_align == "left") {
                this_icon.addClass("f_left");
            } else if (icon_align == "right") {
                this_icon.addClass("f_right");
            } else if (icon_align == "center") {
                this_icon.addClass("t_center");
                this_icon.css("margin-bottom", "15px");
            }

            if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                this_icon.find("> span").css({ "background-color": span_bg, "border-color": border_color, "border-width": border_width + "px", "border-style": "solid", "-moz-border-radius": border_radius + "px", "-webkit-border-radius": border_radius + "px", "border-radius": border_radius + "px" });
            }
            this_icon.find("> span i").css({ "color": i_color });

            this_icon.hover(function () {
                if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                    this_icon.find("> span").css({ "background-color": span_hover, "border-color": border_hover });
                }
                this_icon.find("> span i").css({ "color": i_hover });
            }, function () {
                if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                    this_icon.find("> span").css({ "background-color": span_bg, "border-color": border_color });
                }
                this_icon.find("> span i").css({ "color": i_color });
            });
        }
    });

    /* Section */

    $(".section-warp").each(function () {
        var section = $(this);
        var section_background_color = section.attr("section_background_color");
        var section_background = section.attr("section_background");
        var section_background_size = section.attr("section_background_size");
        var section_color = section.attr("section_color");
        var section_color_a = section.attr("section_color_a");
        var section_padding_top = section.attr("section_padding_top");
        var section_padding_bottom = section.attr("section_padding_bottom");
        var section_margin_top = section.attr("section_margin_top");
        var section_margin_bottom = section.attr("section_margin_bottom");
        var section_border_top = section.attr("section_border_top");
        var section_border_bottom = section.attr("section_border_bottom");

        if (section_background != "" && section_background != undefined) {
            section.css({ "background-image": "url(" + section_background + ")" });
        }

        section.css({ "background-size": section_background_size, "background-color": section_background_color, "color": section_color, "padding-top": section_padding_top + "px", "padding-bottom": section_padding_bottom + "px", "margin-top": section_margin_top + "px", "margin-bottom": section_margin_bottom + "px" });
        section.find("h1").css({ "color": section_color });
        section.find("h2").css({ "color": section_color });
        section.find("h3").css({ "color": section_color });
        section.find("h4").css({ "color": section_color });
        section.find("h5").css({ "color": section_color });
        section.find("h6").css({ "color": section_color });
        section.find("p").css({ "color": section_color });
        section.find("a").not(".button").css({ "color": section_color_a });
        if (section_border_top != "") {
            section.css({ "border-top": "1px solid " + section_border_top });
        }
        if (section_border_bottom != "") {
            section.css({ "border-bottom": "1px solid " + section_border_bottom });
        }
    });

    /* Accordion & Toggle */

    $(".accordion").each(function () {
        if ($(this).hasClass("toggle-accordion")) {
            $(this).find(".accordion-toggle-open").addClass("active");
            $(this).find(".accordion-toggle-open").next(".accordion-inner").show();
        } else {
            var what_active = $(this).attr("what-active");
            if (what_active != undefined) {
                $(this).find(".accordion-inner:nth-child(" + what_active * 2 + ")").show();
                $(this).find(".accordion-inner:nth-child(" + what_active * 2 + ")").prev().addClass("active");
            }
        }
    });

    $(".accordion .accordion-title").each(function () {
        //i_color
        var i_color = $(this).parent().attr("i_color");
        $(this).parent().find(".accordion-title i").css({ "color": i_color });
        //i_click
        var i_click = $(this).parent().attr("i_click");
        $(this).parent().find(".accordion-title.active i").css({ "color": i_click });

        $(this).click(function () {
            if ($(this).parent().hasClass("toggle-accordion")) {
                $(this).parent().find("li:first .accordion-title").addClass("active");
                $(this).toggleClass("active");
                $(this).next(".accordion-inner").slideToggle();
            } else {
                if ($(this).next().is(":hidden")) {
                    $(this).parent().find(".accordion-title").removeClass("active").next().slideUp(200);
                    $(this).toggleClass("active").next().slideDown(200);
                }
            }
            if ($(this).parent().hasClass("acc-style-4")) {
                $(this).parent().find(".accordion-title.active").next().css({ "border-bottom": "1px solid #DEDEDE" });
            }
            //i_color
            $(this).parent().find(".accordion-title i").css({ "color": i_color });
            //i_click
            $(this).parent().find(".accordion-title.active i").css({ "color": i_click });
            return false;
        });
    });

    /* Tabs */

    $("ul.tabs").tabs(".tab-inner-warp", { effect: "slide", fadeInSpeed: 100 });

    $("ul.tabs li").each(function () {
        //i_color
        var i_color = $(this).parent().parent().attr("i_color");
        $(this).find("a i").css({ "color": i_color });
        //i_click
        var i_click = $(this).parent().parent().attr("i_click");
        $(this).find("a.current i").css({ "color": i_click });

        $(this).find("a").hover(function () {
            $(this).find("i").css({ "color": i_click });
        }, function () {
            if ($(this).hasClass("current")) {
                $(this).find("i").css({ "color": i_click });
            } else {
                $(this).find("i").css({ "color": i_color });
            }
        });

        $(this).click(function () {
            //i_color
            var i_color = $(this).parent().parent().attr("i_color");
            $(this).parent().find("a i").css({ "color": i_color });
            //i_click
            var i_click = $(this).parent().parent().attr("i_click");
            $(this).find("a.current i").css({ "color": i_click });
            return false;
        });

        var tab_width = $(this).parent().parent().attr("tab_width");
        if ($(this).parent().parent().hasClass("tabs-vertical")) {
            $(this).parent().css({ "width": tab_width + "px" });
            $(this).parent().parent().find("div.tab-inner-warp").css({ "margin-left": tab_width + "px" });
        }
    });

    /* Button */

    $(".button").each(function () {
        var button = $(this);
        var button_background = button.attr("button_background");
        var button_background_hover = button.attr("button_background_hover");
        var button_color = button.attr("button_color");
        var button_color_hover = button.attr("button_color_hover");
        var button_border = button.attr("button_border");
        var button_border_hover = button.attr("button_border_hover");
        var button_border_width = button.attr("button_border_width");
        var button_border_radius = button.attr("button_border_radius");

        button.css({ "background-color": button_background, "color": button_color, "border": button_border_width + "px solid " + button_border, "-moz-border-radius": button_border_radius + "px", "-webkit-border-radius": button_border_radius + "px", "border-radius": button_border_radius + "px" });

        button.hover(function () {
            button.css({ "background-color": button_background_hover, "color": button_color_hover, "border-color": button_border_hover });
        }, function () {
            button.css({ "background-color": button_background, "color": button_color, "border": button_border_width + "px solid " + button_border, "-moz-border-radius": button_border_radius + "px", "-webkit-border-radius": button_border_radius + "px", "border-radius": button_border_radius + "px" });
        });
    });

    /* Lists */

    $(".ul_list").each(function () {
        var ul_list = $(this);
        var list_background = ul_list.attr("list_background");
        var list_background_hover = ul_list.attr("list_background_hover");
        var list_color = ul_list.attr("list_color");
        var list_color_hover = ul_list.attr("list_color_hover");
        var list_border_radius = ul_list.attr("list_border_radius");

        if (ul_list.hasClass("ul_list_circle") || ul_list.hasClass("ul_list_square")) {
            ul_list.find("ul li i").css({ "background-color": list_background, "-moz-border-radius": list_border_radius + "px", "-webkit-border-radius": list_border_radius + "px", "border-radius": list_border_radius + "px" });
            ul_list.find("ul li").hover(function () {
                $(this).find("i").css({ "background-color": list_background_hover });
            }, function () {
                $(this).find("i").css({ "background-color": list_background });
            });
        }
        ul_list.find("ul li i").css({ "color": list_color });

        ul_list.find("ul li").hover(function () {
            $(this).find("i").css({ "color": list_color_hover });
        }, function () {
            $(this).find("i").css({ "color": list_color });
        });
        ul_list.find("i").each(function () {
            var ul_l = $(this);
            var l_background = ul_l.attr("l_background");
            var l_background_hover = ul_l.attr("l_background_hover");
            var l_color = ul_l.attr("l_color");
            var l_color_hover = ul_l.attr("l_color_hover");
            var l_border_radius = ul_l.attr("l_border_radius");

            if (ul_l.hasClass("ul_l_circle") || ul_l.hasClass("ul_l_square")) {
                ul_l.css({ "background-color": l_background, "-moz-border-radius": l_border_radius + "px", "-webkit-border-radius": l_border_radius + "px", "border-radius": l_border_radius + "px" });
                ul_l.parent().hover(function () {
                    ul_l.css({ "background-color": l_background_hover });
                }, function () {
                    ul_l.css({ "background-color": l_background });
                });
            }

            ul_l.css({ "color": l_color });

            ul_l.parent().hover(function () {
                ul_l.css({ "color": l_color_hover });
            }, function () {
                ul_l.css({ "color": l_color });
            });
        });
    });

    /* Quote */

    $("blockquote").each(function () {
        var blockquote = $(this);
        var blockquote_background = blockquote.attr("blockquote_background");
        var blockquote_color = blockquote.attr("blockquote_color");
        var blockquote_border = blockquote.attr("blockquote_border");

        blockquote.css({ "background-color": blockquote_background, "color": blockquote_color, "border-color": blockquote_border });
    });

    /* Dropcap */

    $(".dropcap").each(function () {
        var dropcap = $(this);
        var dropcap_background = dropcap.attr("dropcap_background");
        var dropcap_color = dropcap.attr("dropcap_color");
        var dropcap_border_radius = dropcap.attr("dropcap_border_radius");

        if (dropcap_border_radius != "" && dropcap_border_radius != undefined) {
            dropcap.css({ "-moz-border-radius": dropcap_border_radius + "px", "-webkit-border-radius": dropcap_border_radius + "px", "border-radius": dropcap_border_radius + "px" });
        }
        dropcap.css({ "background-color": dropcap_background, "color": dropcap_color });
    });

    /* Divider */

    $(".divider").each(function () {
        var divider = $(this);
        var divider_color = divider.attr("divider_color");

        divider.css({ "border-bottom-color": divider_color });
    });

    /* Progress Bar */

    if ($(".progressbar-percent").length) {
        $(".progressbar-percent").each(function () {
            var $this = $(this);
            var percent = $this.attr("attr-percent");
            $this.bind("inview", function (event, isInView, visiblePartX, visiblePartY) {
                if (isInView) {
                    $this.animate({ "width": percent + "%" }, percent * 20);
                }
            });
        });
    }

    /* Testimonial */

    $(".testimonial-warp").each(function () {
        var testimonial = $(this);
        var testimonial_background = testimonial.attr("testimonial_background");
        var testimonial_color = testimonial.attr("testimonial_color");
        var testimonial_border = testimonial.attr("testimonial_border");
        var border_radius = testimonial.attr("border_radius");
        var client_color = testimonial.attr("client_color");
        var jop_color = testimonial.attr("jop_color");

        testimonial.find(".testimonial").css({ "background-color": testimonial_background, "color": testimonial_color, "border-color": testimonial_border, "-moz-border-radius": border_radius + "px", "-webkit-border-radius": border_radius + "px", "border-radius": border_radius + "px" });
        testimonial.find(".testimonial a").css({ "color": testimonial_color });
        testimonial.find(".testimonial-f-arrow").css({ "border-top-color": testimonial_border });
        testimonial.find(".testimonial-l-arrow").css({ "border-top-color": testimonial_background });

        testimonial.find(".testimonial-client > span").css({ "color": client_color });
        testimonial.find(".testimonial-client > span > span").css({ "color": jop_color });
    });

    /* Callout */

    $(".callout_warp").each(function () {
        var callout_warp = $(this);
        if (callout_warp.find(".button_right").length == 1) {
            callout_warp.find(".callout_inner").css("margin-right", parseFloat(callout_warp.find(".button_right").outerWidth()) + 25);
            var button_css_top = (((parseFloat(callout_warp.innerHeight())) / 2)) - parseFloat(callout_warp.find(".button_right").innerHeight()) / 2;
            callout_warp.find(".button_right").css("top", button_css_top);
        }
    });

    /* Flex slider */

    if ($(".blog_silder").length && $()) {
        var flex_slider = $(".blog_silder");
        flex_slider.flexslider({
            animation: "fade",//fade - slide
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 3000,
            animationSpeed: 800,
            pauseOnHover: true,
            pauseOnAction: true,
            controlNav: false,
            directionNav: true,
        });
    }
    if ($(".flex-slider").length && $()) {
        var flex_slider = $(".flex-slider");
        flex_slider.flexslider({
            animation: "fade",//fade - slide
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 3000,
            animationSpeed: 800,
            pauseOnHover: true,
            pauseOnAction: true,
            controlNav: true,
            directionNav: true,
        });
    }

    /* Tipsy */

    $(".tooltip-n").tipsy({ fade: true, gravity: "s" });
    $(".tooltip-s").tipsy({ fade: true, gravity: "n" });
    $(".tooltip-nw").tipsy({ fade: true, gravity: "nw" });
    $(".tooltip-ne").tipsy({ fade: true, gravity: "ne" });
    $(".tooltip-w").tipsy({ fade: true, gravity: "w" });
    $(".tooltip-e").tipsy({ fade: true, gravity: "e" });
    $(".tooltip-sw").tipsy({ fade: true, gravity: "sw" });
    $(".tooltip-se").tipsy({ fade: true, gravity: "se" });

    /* Ask Question */

    $(".publish-question").click(function () {
        var question_title = $("#question_title").val();
        $.post("ask_question.html", question_title, function () {
            window.location.href = "ask_question.html?question_title=" + question_title;
            $("#question-title").val(question_title);
        })
        return false;
    });

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    $("#question-title").val(getParameterByName("question_title"));

    $('#question_tags').tag();

    var question_poll = $("#question_poll:checked").length;
    if (question_poll == 1) {
        $(".poll_options").slideDown(500);
    } else {
        $(".poll_options").slideUp(500);
    }

    $("#question_poll").click(function () {
        var question_poll_c = $("#question_poll:checked").length;
        if (question_poll_c == 1) {
            $(".poll_options").slideDown(500);
        } else {
            $(".poll_options").slideUp(500);
        }
    });

    if ($("#question_poll_item").length) {
        $("#question_poll_item").sortable({ placeholder: "ui-state-highlight" });
    }

    $("#add_poll").click(function () {
        $('#question_poll_item').append('<li id="poll_li_' + nextli + '"><div class="poll-li"><p><input id="ask[' + nextli + '][title]" class="ask" name="ask[' + nextli + '][title]" value="" type="text"></p><input id="ask[' + nextli + '][value]" name="ask[' + nextli + '][value]" value="" type="hidden"><input id="ask[' + nextli + '][id]" name="ask[' + nextli + '][id]" value="' + nextli + '" type="hidden"><div class="del-poll-li"><i class="icon-remove"></i></div><div class="move-poll-li"><i class="icon-fullscreen"></i></div></div></li>');
        $('#poll_li_' + nextli).hide().fadeIn();
        nextli++;
        $(".del-poll-li").click(function () {
            $(this).parent().parent().addClass('removered').fadeOut(function () {
                $(this).remove();
            });
        });
        return false;
    });

    /* single question */

    $(".share-inside").click(function () {
        if ($(".share-inside-warp").hasClass("share-inside-show")) {
            $(".share-inside-warp").slideUp("500");
            $(".share-inside-warp").removeClass("share-inside-show");
        } else {
            $(".share-inside-warp").slideDown("500");
            $(".share-inside-warp").addClass("share-inside-show");
        }
    });

    /* single question poll */

    $(".poll_1").slideUp("300");

    $(".poll_results").click(function () {
        $(".poll_1").slideDown("500");
        $(".poll_2").slideUp("500");
        return false;
    });

    $(".poll_polls").click(function () {
        $(".poll_2").slideDown("500");
        $(".poll_1").slideUp("500");
        return false;
    });

    /* Login panel */

    $("#login-panel").click(function () {
        if ($(this).hasClass("header-top-active")) {
            $(".login-panel").slideUp(500);
            $(this).removeClass("header-top-active");
            $(this).find("i").addClass("icon-user");
            $(this).find("i").removeClass("icon-remove");
        } else {
            $(".login-panel").slideDown(500);
            $(this).addClass("header-top-active");
            $(this).find("i").removeClass("icon-user");
            $(this).find("i").addClass("icon-remove");
        }
        return false;
    });

    /* Signup */

    $(".signup,.login-links-r a").click(function () {
        $(".panel-pop").animate({ "top": "-100%" }, 10).hide();
        $("#signup").show().animate({ "top": "50%" }, 500);
        $("body").prepend("<div class='wrap-pop'></div>");
        wrap_pop();
        return false;
    });

    /* Lost password */

    $(".login-password a").click(function () {
        $(".panel-pop").animate({ "top": "-100%" }, 10).hide();
        $("#lost-password").show().animate({ "top": "50%" }, 500);
        $("body").prepend("<div class='wrap-pop'></div>");
        wrap_pop();
        return false;
    });

    /* Panel pop */

    $(".panel-pop").each(function () {
        var panel_pop = $(this);
        var panel_height = panel_pop.height();
        panel_pop.css("margin-top", "-" + panel_height / 2 + "px");
    });

    $(".panel-pop h2 i").click(function () {
        $(this).parent().parent().animate({ "top": "-100%" }, 500);
        $(".wrap-pop").remove();
    });

    function wrap_pop() {
        $(".wrap-pop").click(function () {
            $(".panel-pop").animate({ "top": "-100%" }, 500).hide(function () {
                $(this).animate({ "top": "-100%" }, 500);
            });
            $(this).remove();
        });
    }

    /* Contact us */

    $(".form-js").submit(function () {
        var thisform = $(this);
        $('.required-error', thisform).remove();
        var name = $("#name").val();
        var mail = $("#mail").val();
        var url = $("#url").val();
        var message = $("#message").val();
        var data = { 'name': name, 'mail': mail, 'url': url, 'message': message };
        if (name == "") {
            $("#name").after('<span class="form-description required-error">Please fill the required field.</span>');
        } else {
            $("#name").parent().find('.required-error').remove();
        }
        if (mail == "") {
            $("#mail").after('<span class="form-description required-error">Please fill the required field.</span>');
        } else {
            $("#mail").parent().find('.required-error').remove();
        }
        if (message == "") {
            $("#message").after('<span class="form-description required-error">Please fill the required field.</span>');
        } else {
            $("#message").parent().find('.required-error').remove();
        }

        if (name != "" && mail != "" && message != "") {
            $.post("contact_us.php", data, function (result) {
                if (result == "done") {
                    thisform.prepend("<div class='alert-message success'><i class='icon-ok'></i><p><span>Thank you " + name + "!</span><br> We'll be in touch real soon .</p></div>");
                    $("#name").val("");
                    $("#mail").val("");
                    $("#url").val("");
                    $("#message").val("");
                }
            });
        }
        return false;
    });

    /* Widget Menu jQuery */

    $(".widget_menu.widget_menu_jquery").each(function () {
        var widget_menu_jquery = $(this);
        var sidebar_w = widget_menu_$.parent().width();
        widget_menu_$.css({ "width": sidebar_w });
    });

    $(window).bind("resize", function () {
        if ($(this).width() > 800) {
            $(".widget_menu.widget_menu_jquery").each(function () {
                var widget_menu_jquery = $(this);
                var sidebar_w = widget_menu_$.parent().width();
                widget_menu_$.css({ "width": sidebar_w });
            });
        }
    });

    $(".widget_menu_jquery").onePageNav({
        currentClass: "current_page_item",
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: parseFloat($("#header").innerHeight()) + 60
    });

    /* Lightbox */

    var lightboxArgs = {
        animation_speed: "fast",
        overlay_gallery: true,
        autoplay_slideshow: false,
        slideshow: 5000, // light_rounded / dark_rounded / light_square / dark_square / facebook
        theme: "pp_default",
        opacity: 0.8,
        show_title: false,
        social_tools: "",
        deeplinking: false,
        allow_resize: true, // Resize the photos bigger than viewport. true/false
        counter_separator_label: "/", // The separator for the gallery counter 1 "of" 2
        default_width: 940,
        default_height: 529
    };

    $("a[href$=jpg], a[href$=JPG], a[href$=jpeg], a[href$=JPEG], a[href$=png], a[href$=gif], a[href$=bmp]:has(img)").prettyPhoto(lightboxArgs);

    $("a[class^='prettyPhoto'], a[rel^='prettyPhoto']").prettyPhoto(lightboxArgs);

    /* Page load */

    $(window).load(function () {
        /* Loader */

        $(".loader").fadeOut(500);

        /* Login panel slideup */

        $(".login-panel").slideUp(500);

        /* Carousel */

        $(".carousel-all").each(function () {
            var $current = $(this);
            var $prev = $(this).find(".carousel-prev");
            var $next = $(this).find(".carousel-next");
            var $effect = $(this).attr("carousel_effect");
            var $auto = $(this).attr("carousel_auto");
            var $responsive = $(this).attr("carousel_responsive");
            var $max = $(this).attr("what_col");
            var $pagination = $(this).find(".carousel-pagination");

            if ($current.hasClass("testimonial-carousel")) {
                var $testimonial_width = $current.css("width");
                $current.find(".testimonial-warp").css("width", $testimonial_width)
            }

            if ($max == 1) {
                var $width = 940;
            }
            if ($max == 2) {
                var $width = 460;
            }
            if ($max == 3) {
                var $width = 300;
            }
            if ($max == 4) {
                var $width = 220;
            }
            if ($max == 5) {
                var $width = 220;
            }
            if ($max == 6) {
                var $width = 140;
            }

            $(this).find(".slides").carouFredSel({
                circular: false,
                prev: $prev,
                next: $next,
                infinite: true,
                auto: ($auto == "true" ? true : false),
                responsive: ($responsive == "true" ? true : false),
                swipe: { onTouch: true },
                pagination: $pagination,
                scroll: {
                    easing: "easeInOutCubic",
                    duration: 600,
                    fx: ($effect == "scroll" ? "scroll" : "") + ($effect == "cover-fade" ? "cover-fade" : "") + ($effect == "fade" ? "fade" : "") + ($effect == "directscroll" ? "directscroll" : "") + ($effect == "crossfade" ? "crossfade" : "") + ($effect == "cover" ? "cover" : "") + ($effect == "uncover" ? "uncover" : "") + ($effect == "uncover-fade" ? "uncover-fade" : "") + ($effect == "none" ? "none" : ""),
                },
                items: ($max == 6 ? 6 : "") + ($max == 5 ? 5 : "") + ($max == 4 ? 4 : "") + ($max == 3 ? 3 : "") + ($max == 2 ? 2 : "") + ($max == 1 ? 1 : ""),
            });
        });

        $(".bxslider").bxSlider({
            slideWidth: 200,
            minSlides: 4,
            maxSlides: 4,
            slideMargin: 30
        });
    });

    /* Widget Menu jQuery */

    $.fn.scrollBottom = function () {
        return $(document).height() - this.scrollTop() - this.height();
    };

    var $widget_menu = $(".widget_menu_jquery");
    var $window = $(window);
    //var top = $widget_menu.parent().position().top;

    var header = parseFloat($("#header-top").outerHeight() + $("#header").outerHeight() + $(".breadcrumbs").outerHeight() + 70);
    var footer = parseFloat($("#footer").outerHeight() + $("#footer-bottom").outerHeight() + 80);

    $window.bind("scroll resize", function () {
        var gap = $window.height() - $widget_menu.height() + 40;
        var visibleHead = header - $window.scrollTop();
        var visibleFoot = footer - $window.scrollBottom();
        var scrollTop = $window.scrollTop();

        if (scrollTop < header) {
            $widget_menu.css({
                top: visibleHead + "px",
                bottom: "auto"
            });
        } else if (visibleFoot > $window.height() - $widget_menu.height()) {
            $widget_menu.css({
                top: "auto",
                bottom: visibleFoot + "px"
            });
        } else {
            if ($("#wrap").hasClass("fixed-enabled")) {
                $widget_menu.css({
                    top: parseFloat($(".fixed-nav").outerHeight() + 40),
                    bottom: "auto"
                });
            } else {
                $widget_menu.css({
                    top: "40px",
                    bottom: "auto"
                });
            }
        }
    }).scroll();
});