type statuses = 'fail' | 'success' | null | undefined

type ValidatedStatuses<T> = T extends string ? T : never

type status = ValidatedStatuses<statuses>