
var request = require('request')


exports.protocol = 'http://';
exports.domain = 'umispublic.government.bg';

exports.path = {
    projects: '/prProcedureProjectsInfo.aspx?op=-1&proc=-2&clear=1',
    project: '/srchProjectInfo.aspx'
};

exports.url = function (name, args) {
    return this.protocol + this.domain + this.path[name];
}

exports.params = {
    get: function (name, args) {
        var list = {
            project: {qs:{id:args.id}}
        };
        return list[name]||null;
    },
    post: function (name, args) {
        var list = {
            projects: {
                form: {
                    tvMainMenu_ExpandState:'ennnnnnnennnnnnnennnenenenen',
                    tvMainMenu_SelectedNode:'tvMainMenut21',
                    __EVENTTARGET:'ctl00$ContentPlaceHolder1$CtlListPager1$hl'+args.next,
                    __EVENTARGUMENT:'',
                    tvMainMenu_PopulateLog:'',
                    __VIEWSTATE:args.viewstate||'/wEPDwUKLTQ4NTg5Nzk0MQ8WFh4VUHJvamVjdHNJbmZvX1JlZ2lvbklEKClZU3lzdGVtLkludDY0LCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODkCLTEeGlByb2plY3RzSW5mb19OdW1iZXJPZlBhZ2VzAv4IHgVTdGF0ZQUCLTEeClNldHRsZW1lbnRlHhhQcm9qZWN0c0luZm9fUHJvY2VkdXJlSUQC/v///w8eFlByb2plY3RzSW5mb19Tb3J0VHJlbmQFA0FTQx4YUHJvamVjdHNJbmZvX0N1cnJlbnRQYWdlAgEeC1Byb2plY3ROYW1lZR4XUHJvamVjdHNJbmZvX1NvcnRDb2x1bW4FC0JlbmVmaWNpZW50HhRQcm9qZWN0c0luZm9fT3BNYXBJRAL/////Dx4LQmVuZWZpY2llbnRlFgJmD2QWAgIDD2QWDAIDDw8WAh4EVGV4dAV70JjQvdGE0L7RgNC80LDRhtC40Y/RgtCwINC1INCw0LrRgtGD0LDQu9C40LfQuNGA0LDQvdCwINC90LA6IDAyLjA3LjIwMTQNCiDQktGB0LjRh9C60Lgg0YHRgtC+0LnQvdC+0YHRgtC4INGB0LAg0LIg0LvQtdCy0LAuZGQCEQ8WAh8LBakDPGEgIHN0eWxlPSJjb2xvcjogIzM2NWQ5ODsgdGV4dC1kZWNvcmF0aW9uOiBub25lIiB0YXJnZXQ9Il9zZWxmIiBocmVmPSJEZWZhdWx0LmFzcHgiPtCf0YPQsdC70LjRh9C90LAg0LjQvdGE0L7RgNC80LDRhtC40Y8vPC9hPjxhICAgc3R5bGU9ImNvbG9yOiAjMzY1ZDk4OyB0ZXh0LWRlY29yYXRpb246IG5vbmUiIHRhcmdldD0iX3NlbGYiIGhyZWY9InByUHJvY2VkdXJlUHJvamVjdHNJbmZvLmFzcHg/Y2xlYXI9MT9vcD0tMSZwcm9jPS0yIj7Qn9GA0L7QtdC60YLQuC88L2E+PGEgIHN0eWxlPSJjb2xvcjogIzM2NWQ5ODsgdGV4dC1kZWNvcmF0aW9uOiBub25lIiB0YXJnZXQ9Il9zZWxmIiBocmVmPSJwclByb2NlZHVyZVByb2plY3RzSW5m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amVjdHMuYXNweD9iZW5lZj04ODM3Ij7QmtCe0JzQn9Cu0KLQldCbINCe0J7QlDwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9ODgzOCI+0JrQldCoINCa0J7QndCh0KPQm9CiPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj0xMTQ2MiI+ItCa0L7RgNC10LrRgtCwIjwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MTE0NjMiPtCV0KIgItCe0KDQldCd0JTQkC3QnNCY0KDQntCh0JvQkNCS0JAg0JLQldCb0JrQntCS0JAiPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj0xMTQ2NCI+0JXQoiAi0JzQsNGA0LrQviDQotC10YDQt9C40LnRgdC60LgiPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj0xMTQ3MyI+0JPQtdC+0YDQs9C4INCc0LDRgNC40L3QvtCyINCT0LXQvtGA0LPQuNC10LI8L2E+ZAICD2QWAmYPFQspJycg0KHQotCg0JjQnNCe0J3QkCDQodCi0KDQntCZJycg0JXQntCe0JRl0J7QsdC70LDRgdGCOiDQkdC70LDQs9C+0LXQstCz0YDQsNC0IE/QsdGJ0LjQvdCwOiDQn9C10YLRgNC40YcgMjg1MCDQn9C10YLRgNC40Ycg0YPQuy7QotGA0LDQutC40Y8gMTGSAdCR0YrQu9Cz0LDRgNC40Y87INCu0JPQntCX0JDQn9CQ0JTQndCQINCYINCu0JbQndCQINCm0JXQndCi0KDQkNCb0J3QkCDQkdCq0JvQk9CQ0KDQmNCvOyDQrtCz0L7Qt9Cw0L/QsNC00LXQvTsg0JHQu9Cw0LPQvtC10LLQs9GA0LDQtDsg0J/QtdGC0YDQuNGHjAE8YSBocmVmPSdzcmNoUHJvamVjdEluZm8uYXNweD9pZD00ODkwOSc+4oCe0KHRgtGA0LjQvNC+0L3QsCDRgdGC0YDQvtC5INC40L3QstC10YHRgtC40YDQsCDQsiDQvtC/0LDQt9Cy0LDQvdC1INC90LAg0L/RgNC40YDQvtC00LDRgtCw4oCdPC9hPgogICAxMTEgMDIwCSAgIDgzIDI2NQkgICAyNyA5NjQJICAgODMgMjY1BTEyLDAwEtCf0YDQuNC60LvRjtGH0LXQvb8EPC9icj48YSBocmVmPSJpQmVuZWZpY2llbnRQcm9qZWN0cy5hc3B4P2JlbmVmPTc2MTgiPtCi0K7QpCDQndCe0KDQlCDQkdGK0LvQs9Cw0YDQuNGPINCV0J7QntCUPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj0xMjE2OCI+ItCh0YLRgNGD0LzQsCIg0J7QntCUPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj0xNTczNSI+ItCS0LDRgdC40LvQtdCy0Lgg0Lgg0KHQmNCVLdCTIiDQntCe0JQ8L2E+PC9icj48YSBocmVmPSJpQmVuZWZpY2llbnRQcm9qZWN0cy5hc3B4P2JlbmVmPTE1NzM2Ij7QodCe0J8gItCk0LjQvdGB0YLQsNCxIiDQntCe0JQ8L2E+PC9icj48YSBocmVmPSJpQmVuZWZpY2llbnRQcm9qZWN0cy5hc3B4P2JlbmVmPTE1NzM3Ij4i0JHRitC70LPQsNGA0L4t0LDQstGB0YLRgNC40LnRgdC60LAg0LzQtdC90LjQtNC20LzRitC90YIg0LDQutCw0LTQtdC80LjRjyIg0J7QntCUPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj0xNTczOCI+ItCV0YrRgCDRgtC10YUiINCe0J7QlDwvYT5kAgMPZBYCZg8VCzEiINCV0L3QtdGA0LPQvtGA0LXQvNC+0L3RgiAtINCh0LvQuNCy0LXQvSIg0J7QntCUbNCe0LHQu9Cw0YHRgjog0KHQu9C40LLQtdC9IE/QsdGJ0LjQvdCwOiDQodC70LjQstC10L0gODgwMCDQodC70LjQstC10L0g0YPQuy4i0KHQotCV0KTQkNCdINCa0JDQoNCQ0JTQltCQIiAyMXvQkdGK0LvQs9Cw0YDQuNGPOyDQodCV0JLQldCg0J3QkCDQmCDQrtCT0J7QmNCX0KLQntCn0J3QkCDQkdCq0JvQk9CQ0KDQmNCvOyDQrtCz0L7QuNC30YLQvtGH0LXQvTsg0KHQu9C40LLQtdC9OyDQodC70LjQstC10L2PATxhIGhyZWY9J3NyY2hQcm9qZWN0SW5mby5hc3B4P2lkPTU0NDI0Jz4i0JzQvtC00LXRgNC90LjQt9Cw0YbQuNGPINC4INGA0LDQt9Cy0LjRgtC40LUg0L3QsCAi0JXQvdC10YDQs9C+0YDQtdC80L7QvdGCLdCh0LvQuNCy0LXQvSLQntCe0JQiDQo8L2E+CiAgIDg5OCAzOTAKICAgNjI4IDg3MwogICAyNzAgNzUwCiAgIDYyOCA4NzMFMTgsMDAS0J/RgNC40LrQu9GO0YfQtdC9+QE8L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9NzY2OSI+0JXQktCg0J7QntCU0JjQoiDQoNCj0KHQlTwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9ODY5MyI+ItCf0L7Qu9C40LzQtdGC0LAt0KEiINCe0J7QlDwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MTc5MjkiPtCa0KDQntCd0J7QoSDQk9Cg0JDQpNCY0JrQoTwvYT5kAgQPZBYCZg8VCyoiINCS0JXQoNCY0JvQkCDQm9Cj0JHQoNCY0JrQkNCd0KLQoSAiINCQ0JStAdCe0LHQu9Cw0YHRgjog0KHQvtGE0LjRjyDQvtCx0LvQsNGB0YIgT9Cx0YnQuNC90LA6INCV0LvQuNC9INCf0LXQu9C40L0gMjEyOSDQoNCw0LLQvdC+INC/0L7Qu9C1INGBLiDQoNCw0LLQvdC+INCf0L7Qu9C1LCDQmNC90LTRg9GB0YLRgNC40LDQu9C10L0g0YbQtdC90YLRitGAICLQktC10YDQuNC70LAimgHQkdGK0LvQs9Cw0YDQuNGPOyDQrtCT0J7Ql9CQ0J/QkNCU0J3QkCDQmCDQrtCW0J3QkCDQptCV0J3QotCg0JDQm9Cd0JAg0JHQqtCb0JPQkNCg0JjQrzsg0K7Qs9C+0LfQsNC/0LDQtNC10L07INCh0L7RhNC40Y8g0L7QsdC70LDRgdGCOyDQldC70LjQvSDQn9C10LvQuNC9ygE8YSBocmVmPSdzcmNoUHJvamVjdEluZm8uYXNweD9pZD01ODU4OCc+0JLQvdC10LTRgNGP0LLQsNC90LUg0LIg0L/RgNC+0LjQt9Cy0L7QtNGB0YLQstC+0YLQviDQvdCwINGC0LXRh9C10L0g0L/RgNC10L/QsNGA0LDRgiDQt9CwINGA0LDQt9C80YDQsNC30Y/QstCw0L3QtSDQvdCwINC/0YrRgtC40YnQsCDQuCDQvNCw0LPQuNGB0YLRgNCw0LvQuAo8L2E+CiAgIDU3NSAwMDAKICAgMjg3IDUwMAogICAzMTYgODc2CiAgIDI4NyA1MDAFMTUsMDAS0J/RgNC40LrQu9GO0YfQtdC9+gQ8L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MzAyIj4i0KLQvtC80LjQutCwIC3QnNC10YLQsNC7IiDQkNCUPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj03Mzc4Ij4i0KHQuNC60YPQtdGB0YIg0KDQuNGB0YrRgNGHINC10L3QtCDQmtC+0L3RgdGD0LvRgtC40L3QsyIg0J7QntCUPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj04MjIxIj4i0JTQntCd0JDQoyDQm9CQ0JEiINCV0J7QntCUPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj0xMTI0MCI+0KIu0JUu0JAu0Jw8L2E+PC9icj48YSBocmVmPSJpQmVuZWZpY2llbnRQcm9qZWN0cy5hc3B4P2JlbmVmPTIzNjQ0Ij4i0KbQtdC90L7QstCwINC60L7QvdGB0YPQu9GCIiDQldCe0J7QlDwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MjM2NDUiPiLQk9GA0LDRhNC40Log0JTQuNC30LDQudC9IiDQldCe0J7QlDwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MjM2NDYiPiLQodC/0LXQutGC0YDQvtGC0LXRhSIg0JXQntCe0JQ8L2E+ZAIFD2QWAmYPFQspJycg0KHQotCg0JjQnNCe0J3QkCDQodCi0KDQntCZJycg0JXQntCe0JRl0J7QsdC70LDRgdGCOiDQkdC70LDQs9C+0LXQstCz0YDQsNC0IE/QsdGJ0LjQvdCwOiDQn9C10YLRgNC40YcgMjg1MCDQn9C10YLRgNC40Ycg0YPQuy7QotGA0LDQutC40Y8gMTGSAdCR0YrQu9Cz0LDRgNC40Y87INCu0JPQntCX0JDQn9CQ0JTQndCQINCYINCu0JbQndCQINCm0JXQndCi0KDQkNCb0J3QkCDQkdCq0JvQk9CQ0KDQmNCvOyDQrtCz0L7Qt9Cw0L/QsNC00LXQvTsg0JHQu9Cw0LPQvtC10LLQs9GA0LDQtDsg0J/QtdGC0YDQuNGHkgE8YSBocmVmPSdzcmNoUHJvamVjdEluZm8uYXNweD9pZD02NDA3Myc+0KHQotCg0JjQnNCe0J3QkCDQodCi0KDQntCZINCw0LLRgtC+0LzQsNGC0LjQt9C40YDQsCDRgdC40YHRgtC10LzQuNGC0LUg0YHQuCDQt9CwINGD0L/RgNCw0LLQu9C10L3QuNC1PC9hPgogICAxMzUgMTQ4CiAgIDEwMSAzNjEJICAgMzMgOTM4CiAgIDEwMSAzNjEFMTIsMDAS0J/RgNC40LrQu9GO0YfQtdC9sAI8L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MjE0OSI+4oCe0JrQvtC90YLRgNCw0LrRgeKAnSDQkNCUPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj04NDA4Ij7QldCh0JjQojwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MTQyMTgiPiLQkNCd0JTQmCDQkNCU0JIiINCe0J7QlDwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MTczMzIiPiLQmNCd0KXQntCcIiDQntCe0JQ8L2E+ZAIGD2QWAmYPFQspJycg0KHQotCg0JjQnNCe0J3QkCDQodCi0KDQntCZJycg0JXQntCe0JRl0J7QsdC70LDRgdGCOiDQkdC70LDQs9C+0LXQstCz0YDQsNC0IE/QsdGJ0LjQvdCwOiDQn9C10YLRgNC40YcgMjg1MCDQn9C10YLRgNC40Ycg0YPQuy7QotGA0LDQutC40Y8gMTGSAdCR0YrQu9Cz0LDRgNC40Y87INCu0JPQntCX0JDQn9CQ0JTQndCQINCYINCu0JbQndCQINCm0JXQndCi0KDQkNCb0J3QkCDQkdCq0JvQk9CQ0KDQmNCvOyDQrtCz0L7Qt9Cw0L/QsNC00LXQvTsg0JHQu9Cw0LPQvtC10LLQs9GA0LDQtDsg0J/QtdGC0YDQuNGHnQE8YSBocmVmPSdzcmNoUHJvamVjdEluZm8uYXNweD9pZD02NzAxMyc+0J/QvtC00L7QsdGA0Y/QstCw0L3QtSDQvdCwINC60LDRh9C10YHRgtCy0L7RgtC+INC4INC10YTQtdC60YLQuNCy0L3QvtGB0YLRgtCwINC90LAg0KHQotCg0JjQnNCe0J3QkCDQodCi0KDQntCZDQo8L2E+CiAgIDc2NCA2NTYKICAgNDU4IDc5NAogICAzMDggNjgwCiAgIDQ1OCA3OTIFMTIsMDAS0J/RgNC40LrQu9GO0YfQtdC9ngM8L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9ODY5MyI+ItCf0L7Qu9C40LzQtdGC0LAt0KEiINCe0J7QlDwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MTQyMTgiPiLQkNCd0JTQmCDQkNCU0JIiINCe0J7QlDwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MTU1NzAiPiLQmNC90YXQvtC80LUg0L/RgNC+0L/RitGA0YLQuNGBIiDQntCe0JQ8L2E+PC9icj48YSBocmVmPSJpQmVuZWZpY2llbnRQcm9qZWN0cy5hc3B4P2JlbmVmPTE2NjQ2Ij4i0KLRgNC40LIiINCV0J7QntCUPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj0xNzMzMiI+ItCY0J3QpdCe0JwiINCe0J7QlDwvYT5kAgcPZBYCZg8VCyknJyDQodCi0KDQmNCc0J7QndCQINCh0KLQoNCe0JknJyDQldCe0J7QlGXQntCx0LvQsNGB0YI6INCR0LvQsNCz0L7QtdCy0LPRgNCw0LQgT9Cx0YnQuNC90LA6INCf0LXRgtGA0LjRhyAyODUwINCf0LXRgtGA0LjRhyDRg9C7LtCi0YDQsNC60LjRjyAxMZIB0JHRitC70LPQsNGA0LjRjzsg0K7Qk9Ce0JfQkNCf0JDQlNCd0JAg0Jgg0K7QltCd0JAg0KbQldCd0KLQoNCQ0JvQndCQINCR0KrQm9CT0JDQoNCY0K87INCu0LPQvtC30LDQv9Cw0LTQtdC9OyDQkdC70LDQs9C+0LXQstCz0YDQsNC0OyDQn9C10YLRgNC40YeQATxhIGhyZWY9J3NyY2hQcm9qZWN0SW5mby5hc3B4P2lkPTg1Mzk0Jz7QodGC0YDQuNC80L7QvdCwINCh0YLRgNC+0LkgLSDQtdC90LXRgNCz0LjQudC90L4g0LXRhNC10LrRgtC40LLQvdCwINC4INC30LXQu9C10L3QsCDQutC+0LzQv9Cw0L3QuNGPPC9hPgogICA0MjYgNzM3CiAgIDIxMyAzNjkKICAgMjEzIDM2OQogICAyMTMgMzY5BDQsMDAS0J/RgNC40LrQu9GO0YfQtdC9iwI8L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9ODY5MyI+ItCf0L7Qu9C40LzQtdGC0LAt0KEiINCe0J7QlDwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9OTMyMyI+ItCa0LDQvNC80LDRgNGC0L7QvSDQkdGK0LvQs9Cw0YDQuNGPIiDQldCe0J7QlDwvYT48L2JyPjxhIGhyZWY9ImlCZW5lZmljaWVudFByb2plY3RzLmFzcHg/YmVuZWY9MTQyMTgiPiLQkNCd0JTQmCDQkNCU0JIiINCe0J7QlDwvYT5kAggPZBYCZg8VCxoiINCS0JjQm9Ci0J7QnSAtIDIiINCe0J7QlFbQntCx0LvQsNGB0YI6INCv0LzQsdC+0LsgT9Cx0YnQuNC90LA6INCv0LzQsdC+0LsgODYwMCDQr9C80LHQvtC7INGD0Lsu0J7RgNC80LDQvdCwIDTQkHfQkdGK0LvQs9Cw0YDQuNGPOyDQodCV0JLQldCg0J3QkCDQmCDQrtCT0J7QmNCX0KLQntCn0J3QkCDQkdCq0JvQk9CQ0KDQmNCvOyDQrtCz0L7QuNC30YLQvtGH0LXQvTsg0K/QvNCx0L7Quzsg0K/QvNCx0L7Qu8QCPGEgaHJlZj0nc3JjaFByb2plY3RJbmZvLmFzcHg/aWQ9ODkyMDcnPiLQn9C+0LLQuNGI0LDQstCw0L3QtSDQsdC10LfQvtC/0LDRgdC90L7RgdGC0YLQsCDQvdCwINGC0YDRg9C00LAg0LLRitCyINGE0LjRgNC90LAgItCS0JjQm9Ci0J7QnSAtIDIiINCe0J7QlCDRh9GA0LXQtyDRg9GB0YrQstGK0YDRiNC10L3RgdGC0LLQsNC90LUg0L7RgNCz0LDQvdC40LfQsNGG0LjRj9GC0LAg0L3QsCDRgtGA0YPQtNCwINC4INCy0L3QtdC00YDRj9Cy0LDQvdC1INC90LAg0YHRgtCw0L3QtNCw0YDRgiDQt9CwINGD0L/RgNCw0LLQu9C10L3QuNC1INC90LAg0YDQuNGB0LrQsCI8L2E+CiAgIDE3NCAwMzIKICAgMTc0IDAzMgUgICAgMAkgICA2NiAzMDMENiwwMynQkiDQv9GA0L7RhtC10YEg0L3QsCDQuNC30L/RitC70L3QtdC90LjQteUDPC9icj48YSBocmVmPSJpQmVuZWZpY2llbnRQcm9qZWN0cy5hc3B4P2JlbmVmPTgwNDQiPtCg0JjQndCQINCR0KrQm9CT0JDQoNCY0K88L2E+PC9icj48YSBocmVmPSJpQmVuZWZpY2llbnRQcm9qZWN0cy5hc3B4P2JlbmVmPTE5ODU2Ij7QkNCS0J4g0JrQntCd0KHQo9Cb0KI8L2E+PC9icj48YSBocmVmPSJpQmVuZWZpY2llbnRQcm9qZWN0cy5hc3B4P2JlbmVmPTIzMTY1Ij7QnNC+0L3QuNGG0L7QvdC4INCV0J7QntCUPC9hPjwvYnI+PGEgaHJlZj0iaUJlbmVmaWNpZW50UHJvamVjdHMuYXNweD9iZW5lZj0yNjE4NSI+ItCk0Y7Rh9GK0YAt0JrQkCIg0J7QntCUPC9hPjwvYnI+PGEgaHJlZj0iaUJl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',
                    'ctl00$txtFastSrch':'',
                    'ctl00$ContentPlaceHolder1$txtPartyFullName':'',
                    'ctl00$ContentPlaceHolder1$txtSettlement':'',
                    'ctl00$ContentPlaceHolder1$txtProjectName':'',
                    'ctl00$ContentPlaceHolder1$ddlState':'-1'
                }
            }
        };
        return list[name]||null;
    }
};

exports.get = function (name, args, done) {
    request.get(this.url(name), this.params.get(name, args), done);
}

exports.post = function (name, args, done) {
    request.post(this.url(name), this.params.post(name, args), done);
}
