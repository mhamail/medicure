import { addFiles } from '@/utils/redux/slices/fileSlice/fileSlice';

export const pdfList = [
    {
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        title: 'Care Your Eye',
        totalPages: 10,
        writtenBy: 'abc',
    },
    {
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        title: 'Care Your Eye',
        totalPages: 10,
        writtenBy: 'abc',
    },
    {
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        title: 'Care Your Eye',
        totalPages: 10,
        writtenBy: 'abc',
    },
];
export const wordList = [
    {
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.docx',
        title: 'Care Your Eye',
        totalPages: 10,
        writtenBy: 'abc',
    },
    {
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.docx',
        title: 'Care Your Eye',
        totalPages: 10,
        writtenBy: 'abc',
    },
    {
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.docx',
        title: 'Care Your Eye',
        totalPages: 10,
        writtenBy: 'abc',
    },
];

export const dispatchFilesHandle = (name,dispatch) => {
    if (name === "Pdf Books") {
        dispatch(addFiles(pdfList))
    }
    if (name === "Word Books") {
        dispatch(addFiles(wordList))
    }
}