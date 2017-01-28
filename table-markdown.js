// ==UserScript==
// @name         Table to Markdown
// @namespace    http://mil1fe.info/
// @version      0.1
// @description  Convert html table to markdown format
// @author       Du Dang
// @include      http://*/*
// @include      https://*/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @require 	 https://raw.githubusercontent.com/hotmit/public/master/gm-utils.min.js
// @require 	 https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.16/clipboard.min.js
// ==/UserScript==
var _ju = {};
JU.publish(JU.__JU, false, false);
delete JU.__JU;
JU.activate(_ju);

(function($, Str) {
    'use strict';

    var MAX_COL_SIZE = 80;

    $(function(){
        var lastThreeKeys = [], combinationLength = 3;

        function _displayTableControl(){
            $('table').each(function(i, e){
                var id = 'btn-copy-md-' + i, $btnMd = $('<button type="button" class="convert-to-markdown btn btn-primary" />'),
                    $tb = $(e), $lastCell = $tb.find('tr:first').find('td:last, th:last').first();
                $btnMd.css({
                    height: '20px',
                    width: '30px',
                    'background-color': '#81358c',
                    color: '#fff',
                    padding: '0'
                }).text('MD').attr('id', id);

                new Clipboard('#' + id, {
                    text: function(trigger) {
                        return _convertTableToMd($btnMd);
                    }
                });

                $lastCell.append($btnMd);
            });

            //$('.convert-to-markdown').click(_convertTableToMd);
        }

        function _getData($table){
            var maxLengths = [], tableData = [];

            function setMax(index, length){
                // create new column if does not exist
                while(index >= maxLengths.length){
                    maxLengths.push(0);
                }
                maxLengths[index] = Math.max(maxLengths[index], length);
            }

            $table.find('tr').each(function(i, tr){
                var $tr = $(tr), row = [], offset = 0;

                $tr.find('td, th').each(function(i, td){
                    var $td = $(td), text = $td.text(), tl = text.length,
                        index = i + offset, colspan = $td.attr('colspan');

                    setMax(index, tl);
                    row.push(text);

                    if (colspan && $.isNumeric(colspan)){
                        colspan = Number(colspan);
                        offset += colspan - 1;
                        for (var k=0; k<colspan; k++){
                            row.push('');
                        }
                    }
                });

                tableData.push(row);
            });

            return {
                maxLengths: maxLengths,
                tableData: tableData
            };
        }

        function _convertTableToMd($btn){
            var md = '', $table = $btn.parents('table'), data = _getData($table), i, k,
                maxLengths = data.maxLengths;

            console.log(data);

            for (i=0; i<data.tableData.length; i++){
                var row = data.tableData[i], rowMd = '| ', sepMd = '| ';

                for(k=0; k<row.length; k++){
                    var rowWidth = Math.min(maxLengths[k], MAX_COL_SIZE),
                        text = Str.padRight(row[k], ' ', rowWidth);
                    rowMd += text + ' | ';

                    // add header separator
                    if (i === 0){
                        sepMd += Str.repeat(' ', rowWidth) + ' | ';
                    }
                }

                if (rowMd.length > 2){
                    md += Str.trim(rowMd) + "\n";
                    if (sepMd.length > 2){
                        md += Str.trim(sepMd).replace(/ /g, '-') + "\n";
                    }
                }
            }

            $btn.css('background-color', '#6AB714');
            setTimeout(function(){
                $btn.css('background-color', '#81358c');
            }, 3000);

            return md;
        }

        // Activate Markdown Converter Interface => Shift, Shift, T (3 key strokes as a sequence, NOT press all together)
        $(document).on('keydown', function(e) {
            lastThreeKeys.push(e.which);
            lastThreeKeys = lastThreeKeys.slice(-combinationLength);
            if (("" + lastThreeKeys) == '16,16,84') {
                _displayTableControl();
                e.preventDefault();
                return false;
            }
        });

        // Uncomment for dev
        // _displayTableControl();

    }); //end jqReady

})(jQuery.noConflict(true), _ju.Str);