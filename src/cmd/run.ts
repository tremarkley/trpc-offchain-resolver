import { Service } from '@/Service'

const run = async () => {
  const service = await Service.init().catch((e) => {
    console.error('Proxy service failed to initialize', e)
    process.exit(1)
  })
  await service.run().catch((e) => {
    console.error('Proxy service failed to run', e)
    process.exit(1)
  })
}

run()
