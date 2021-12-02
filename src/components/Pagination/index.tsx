import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, FirstLi, NumberLi, DotsLi, LastLi } from './styles';

interface IPagination {
  initialPage: number;
  totalNumberOfPages: number;
  onChange(page: number): void;
}

const Pagination: React.FC<IPagination> = ({
  initialPage,
  totalNumberOfPages,
  onChange,
}) => {
  const [page, setPage] = useState(initialPage);
  const [totalPages] = useState(totalNumberOfPages);
  const [pages, setPages] = useState<Array<number>>([]);

  const [firstIsDisabled, setFirstDisabled] = useState(true);
  const [lastIsDisabled, setLastDisabled] = useState(true);

  const handleOnClickFirst = useCallback(() => {
    setPage(1);
    onChange(1);
  }, [onChange]);

  const handleOnClickNumber = useCallback(
    (numberValue: number) => {
      setPage(numberValue);
      onChange(numberValue);
    },
    [onChange],
  );

  const handleOnClickLast = useCallback(() => {
    setPage(totalPages);
    onChange(totalPages);
  }, [onChange, totalPages]);

  useEffect(() => {
    let beforePages = page - 1;
    let afterPages = page + 1;

    const numberPages = [];

    if (page > 2) {
      numberPages.push(1);
      if (page > 3) {
        numberPages.push(0);
      }
    }

    if (page === totalPages) {
      beforePages -= 2;
    } else if (page === totalPages - 1) {
      beforePages -= 1;
    }

    if (page === 1) {
      afterPages += 2;
    } else if (page === 2) {
      afterPages += 1;
    }

    for (
      let pageLength = beforePages;
      pageLength <= afterPages;
      pageLength += 1
    ) {
      if (pageLength <= totalPages) {
        if (pageLength === 0) {
          pageLength += 1;
        }
        numberPages.push(pageLength);
      }
    }

    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        numberPages.push(0);
      }
      numberPages.push(totalPages);
    }

    setPages(numberPages);
  }, [page, totalPages]);

  useEffect(() => {
    if (page > 1) {
      setFirstDisabled(false);
    } else {
      setFirstDisabled(true);
    }
    if (page < totalPages) {
      setLastDisabled(false);
    } else {
      setLastDisabled(true);
    }
  }, [page, totalPages]);

  return (
    <Container>
      <ul>
        <FirstLi isDisabled={firstIsDisabled} onClick={handleOnClickFirst}>
          Início
        </FirstLi>
        {pages.map(numberPage => {
          if (numberPage === 0) {
            return <DotsLi key={uuid()}>...</DotsLi>;
          }
          return (
            <NumberLi
              key={uuid()}
              active={page === numberPage}
              onClick={() => handleOnClickNumber(numberPage)}
            >
              {numberPage}
            </NumberLi>
          );
        })}
        <LastLi isDisabled={lastIsDisabled} onClick={handleOnClickLast}>
          Último
        </LastLi>
      </ul>
    </Container>
  );
};

export default Pagination;
