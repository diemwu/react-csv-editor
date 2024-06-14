import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

interface UseOnDropzoneWrapper {
  renderOnDropzone: React.ReactNode;
  // onDropCallback: (acceptedFiles: File[]) => void;
}

const useOnDropzoneWrapper = (
  onDropCallback: (file: Array<File>) => void,
  children: React.ReactNode
): UseOnDropzoneWrapper => {
  const _onDropCallback = (acceptedFiles: File[]) => {
    return onDropCallback(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: _onDropCallback,
    accept: { 'text/csv': ['.csv'] },
  });

  const renderOnDropzone = useMemo(() => {
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {children}
      </div>
    );
  }, [children, getInputProps, getRootProps]);

  return { renderOnDropzone };
};

export default useOnDropzoneWrapper;
