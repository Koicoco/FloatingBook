import type { BookPage } from '../types'
import BookCover from '../../components/Book/BookCover'
import InsideCoverPage from '../../components/Book/pages/InsideCoverPage'
import TocPage from '../../components/Book/pages/TocPage'
import EducationPage from '../../components/Book/pages/EducationPage'
import ResearchPage from '../../components/Book/pages/ResearchPage'
import ClubsPage from '../../components/Book/pages/ClubsPage'
import WorkPage from '../../components/Book/pages/WorkPage'

export const bookPages: BookPage[] = [
  { id: 'cover',     left: BookCover,       right: null },
  { id: 'toc',       left: InsideCoverPage, right: TocPage },
  { id: 'education', left: EducationPage,   right: ResearchPage },
  { id: 'clubs',     left: ClubsPage,       right: WorkPage },
]
