import { EventHandlerType } from './EventHandler'
import { objectKeys } from './utils'

type IntersectionEntryMapType = {
  [key: number]: IntersectionObserverEntry
}

export type SlidesInViewType = {
  init: () => void
  destroy: () => void
  get: (inView?: boolean) => number[]
}

export function SlidesInView(
  slides: HTMLElement[],
  eventHandler: EventHandlerType
): SlidesInViewType {
  const intersectionEntryMap: IntersectionEntryMapType = {}
  let inViewCache: number[] | null = null
  let notInViewCache: number[] | null = null
  let intersectionObserver: IntersectionObserver
  let destroyed = false

  function init(): void {
    intersectionObserver = new IntersectionObserver((entries) => {
      if (destroyed) return

      entries.forEach((entry) => {
        const index = slides.indexOf(<HTMLElement>entry.target)
        intersectionEntryMap[index] = entry
      })

      inViewCache = null
      notInViewCache = null
      eventHandler.emit('slidesInView')
    })

    slides.forEach((slide) => intersectionObserver.observe(slide))
  }

  function destroy(): void {
    if (intersectionObserver) intersectionObserver.disconnect()
    destroyed = true
  }

  function get(inView: boolean = true): number[] {
    if (inView && inViewCache) return inViewCache
    if (!inView && notInViewCache) return notInViewCache

    const slideIndexes = objectKeys(intersectionEntryMap).reduce(
      (list: number[], slideIndex) => {
        const index = parseInt(slideIndex)
        const { isIntersecting } = intersectionEntryMap[index]
        const inViewMatch = inView && isIntersecting
        const notInViewMatch = !inView && !isIntersecting

        if (inViewMatch || notInViewMatch) return [...list, index]
        return list
      },
      []
    )

    if (inView) inViewCache = slideIndexes
    if (!inView) notInViewCache = slideIndexes

    return slideIndexes
  }

  const self: SlidesInViewType = {
    init,
    destroy,
    get
  }

  return self
}
