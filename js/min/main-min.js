$(document).ready(function(){"use strict";$("ul.tabs li").click(function(){var t=$(this).attr("data-tab");$("ul.tabs li, .tab-content").removeClass("current"),$(this).addClass("current"),$("#"+t).addClass("current")})});