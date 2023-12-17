import { WebContainer } from '@webcontainer/api'

let _webcontainerInstance: WebContainer

export async function useWebContainer() {
  // Call only once
  if (!_webcontainerInstance)
    _webcontainerInstance = await WebContainer.boot()

  return _webcontainerInstance
}
