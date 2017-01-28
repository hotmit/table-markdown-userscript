# Table to Markdown Copier
> **Copy any html table on the web and convert them into markdown format.**

## Usage
1. Display The Interface
	* Press Shift, Shift, T (press in sequence, not together as combination)
1. Click on the "MD" button to copy the markdown content to your clipboard

## Features
* Support th and td (old vs new table markup)
* Support colspan 

## Limitation
* If the colspan is not exact, this will create improper table size (sometime ppl use large colspan to fill the unknown column size colspan="100" even when there only 7 columns for instance)    

## Todo
* [ ] Fix the colspan error
* [ ] Add ref link above the table
* [ ] Detect and generate text alignment


## Example

**Regular table**
![Before turn on the markdown control](/images/table-b4.png)

**Table after markdown table control is activated**
![After turn on the markdown control](/images/table-after.png)


#### Markdown Content
```markdown
| Character | Byte order             | Size     | AlignmentMD |
|-----------|------------------------|----------|-------------|
| @         | native                 | native   | native      |
| =         | native                 | standard | none        |
| <         | little-endian          | standard | none        |
| >         | big-endian             | standard | none        |
| !         | network (= big-endian) | standard | none        |
```

#### Markdown Render
| Character | Byte order             | Size     | AlignmentMD |
|-----------|------------------------|----------|-------------|
| @         | native                 | native   | native      |
| =         | native                 | standard | none        |
| <         | little-endian          | standard | none        |
| >         | big-endian             | standard | none        |
| !         | network (= big-endian) | standard | none        |
