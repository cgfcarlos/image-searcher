import { BehaviorSubject, Observable } from "rxjs";

/**
 * Class for defining the state management of the aplicattion
 *
 * @export
 * @class Store
 * @template T type
 */
export class Store<T> {
    private state$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this.state$ = new BehaviorSubject(initialState);
    }

    /**
     * Gets the current value of the store
     *
     * @return {*}  {T}
     * @memberof Store
     */
    getValue(): T {
        return this.state$.getValue();
    }

    /**
     * Gets the current value of the store as an Observable
     *
     * @return {*}  {Observable<T>}
     * @memberof Store
     */
    getState(): Observable<T> {
        return this.state$.asObservable();
    }

    /**
     * Updates the current value of the store
     *
     * @param {T} nextState
     * @memberof Store
     */
    setState(nextState: T): void {
        this.state$.next(nextState);
    }
}