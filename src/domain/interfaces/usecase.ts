export default interface UseCase<T, K> {
    execute( data? : T): K | Promise<K>;
}