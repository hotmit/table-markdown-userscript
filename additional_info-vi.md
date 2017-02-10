# Table to Markdown Copier
> **Bạn có thể chép bất cứ bảng html (table) nào trên mạng và chuyển nó qua dạng markdown.**

## Nguồn ở bên GitHub
* https://github.com/hotmit/table-markdown-userscript

## Cách Xài
1. Hiển thị nút chép 
	* Ấn nút **Shift, Shift, T** (ấn theo thứ tự một nút rồi thả ra, chớ không phải ấn cùng một lúc)
1. Nhấp vào nút "MD" để chép bảng html dưới dạng markdown vào clipboard

## Ví Dụ

**Bảng Bình Thường**

![Before turn on the markdown control](https://cdn.rawgit.com/hotmit/table-markdown-userscript/ba5e65d6/images/table-b4.png)

**Sau khi hiển thị nút chép**

![After turn on the markdown control](https://cdn.rawgit.com/hotmit/table-markdown-userscript/ba5e65d6/images/table-after.png)


#### Nội dung dưới dạng Markdown
```markdown
| Character | Byte order             | Size     | Alignment   |
|-----------|------------------------|----------|-------------|
| @         | native                 | native   | native      |
| =         | native                 | standard | none        |
| <         | little-endian          | standard | none        |
| >         | big-endian             | standard | none        |
| !         | network (= big-endian) | standard | none        |
[Table Source](https://docs.python.org/3/library/struct.html#byte-order-size-and-alignment)
```

# License
[MIT License](https://github.com/hotmit/table-markdown-userscript/raw/master/LICENSE)
Bạn có thể chép, thay đổi, hay làm bất cứ gì cũng được. Bản quền MIT rất là dễ dãi.